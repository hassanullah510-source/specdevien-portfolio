/* Portfolio enhancements — progressive enhancement only.
   Every feature here is optional: content and navigation work without it. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(pointer: fine)");
  var canObserve = "IntersectionObserver" in window;

  /* ---------------------------------------------------------------- reveal */
  (function reveal() {
    if (!canObserve || reduceMotion.matches) return;

    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    root.classList.add("reveal-ready");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  })();

  /* ------------------------------------------------------ header + nav state */
  (function headerState() {
    var progress = document.querySelector("[data-progress]");
    var toTop = document.querySelector("[data-to-top]");
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav__link")
    );
    var sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);
    var header = document.querySelector(".site-header");
    var ticking = false;

    function paint() {
      ticking = false;

      var scrollY = window.scrollY;
      var scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (progress) {
        var ratio = scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0;
        progress.style.transform = "scaleX(" + ratio + ")";
      }

      if (toTop) {
        toTop.classList.toggle(
          "is-visible",
          scrollY > window.innerHeight * 0.6
        );
      }

      var headerH = header ? header.offsetHeight : 0;
      var marker = scrollY + headerH + window.innerHeight * 0.28;
      var current = null;

      sections.forEach(function (section) {
        var top = section.getBoundingClientRect().top + scrollY;
        if (top <= marker) current = section;
      });

      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = sections[sections.length - 1];
      }

      links.forEach(function (link) {
        if (current && link.getAttribute("href") === "#" + current.id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    function requestPaint() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(paint);
    }

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    paint();
  })();

  /* --------------------------------------------------------- mobile menu */
  (function mobileMenu() {
    var dialog = document.getElementById("mobile-menu");
    var openButton = document.querySelector("[data-menu-open]");
    var closeButton = document.querySelector("[data-menu-close]");
    if (!dialog || !openButton || !closeButton) return;

    var nativeDialog = typeof dialog.showModal === "function";
    var restoreFocus = true;

    function focusable() {
      return Array.prototype.slice
        .call(
          dialog.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        )
        .filter(function (element) {
          return element.offsetParent !== null;
        });
    }

    function onClose() {
      document.body.classList.remove("is-locked");
      openButton.setAttribute("aria-expanded", "false");
      if (restoreFocus) openButton.focus();
      restoreFocus = true;
      document.removeEventListener("keydown", fallbackKeys);
    }

    function openMenu() {
      restoreFocus = true;
      if (nativeDialog) {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
        document.addEventListener("keydown", fallbackKeys);
      }
      document.body.classList.add("is-locked");
      openButton.setAttribute("aria-expanded", "true");
      closeButton.focus();
    }

    function closeMenu() {
      if (nativeDialog && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute("open");
        onClose();
      }
    }

    function fallbackKeys(event) {
      if (event.key === "Escape") {
        restoreFocus = true;
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      var items = focusable();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    dialog.addEventListener("close", onClose);

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        restoreFocus = true;
        closeMenu();
      }
    });

    dialog.querySelectorAll("a[href]").forEach(function (link) {
      link.addEventListener("click", function () {
        restoreFocus = false;
        closeMenu();
      });
    });
  })();

  /* -------------------------------------------------------- ticker control */
  (function ticker() {
    var tickerElement = document.querySelector("[data-ticker]");
    if (!tickerElement) return;

    var track = tickerElement.querySelector("[data-ticker-track]");
    var group = tickerElement.querySelector("[data-ticker-group]");
    var toggle = tickerElement.querySelector("[data-ticker-toggle]");
    var label = tickerElement.querySelector("[data-ticker-label]");
    var icon = toggle ? toggle.querySelector("span[aria-hidden]") : null;
    if (!track || !group || !toggle || !label) return;
    if (reduceMotion.matches) return;

    var clone = group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);

    toggle.addEventListener("click", function () {
      var playing = tickerElement.getAttribute("data-playing") !== "true";
      tickerElement.setAttribute("data-playing", String(playing));
      toggle.setAttribute("aria-pressed", String(playing));
      label.textContent = playing ? "Pause ticker" : "Play ticker";
      if (icon) icon.textContent = playing ? "❚❚" : "▶";
    });
  })();

  /* ------------------------------------------------------------ copy email */
  (function copyEmail() {
    var button = document.querySelector("[data-copy-email]");
    if (!button) return;

    var email = button.getAttribute("data-email");
    var label = button.querySelector("[data-copy-label]");
    var status = document.querySelector("[data-copy-status]");
    var timer = null;

    function fallbackCopy(text) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }
      document.body.removeChild(area);
      return copied;
    }

    function report(message, buttonLabel) {
      if (status) status.textContent = message;
      if (label) label.textContent = buttonLabel;
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        if (status) status.textContent = "";
        if (label) label.textContent = "Copy email";
      }, 4000);
    }

    button.addEventListener("click", function () {
      if (!email) return;

      var done = function (copied) {
        if (copied) {
          report("Email copied to clipboard.", "Copied");
        } else {
          report(
            "Copy failed. Use the email link or select the address manually.",
            "Copy failed"
          );
        }
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(
          function () {
            done(true);
          },
          function () {
            done(fallbackCopy(email));
          }
        );
      } else {
        done(fallbackCopy(email));
      }
    });
  })();

  /* ---------------------------------------------------- pointer spotlight */
  (function spotlight() {
    var hero = document.querySelector(".hero");
    if (!hero || !finePointer.matches || reduceMotion.matches) return;

    var frame = null;
    var heroSpot = hero.querySelector(".hero__spot");
    if (!heroSpot) return;

    hero.addEventListener("pointerenter", function () {
      hero.classList.add("is-spotlight");
    });

    hero.addEventListener("pointerleave", function () {
      hero.classList.remove("is-spotlight");
    });

    hero.addEventListener("pointermove", function (event) {
      if (frame) return;
      frame = window.requestAnimationFrame(function () {
        frame = null;
        var rect = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", event.clientX - rect.left + "px");
        hero.style.setProperty("--my", event.clientY - rect.top + "px");
      });
    });
  })();

  /* ---------------------------------------------------------- footer year */
  (function year() {
    var output = document.querySelector("[data-year]");
    if (!output) return;
    output.textContent = String(new Date().getFullYear());
  })();
})();
