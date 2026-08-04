document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var dropdown = document.querySelector(".nav-dropdown");
  var trigger = document.querySelector(".nav-dropdown-trigger");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen && dropdown) {
        dropdown.classList.remove("open");
      }
    });
  }

  if (trigger && dropdown) {
    trigger.addEventListener("click", function (e) {
      if (window.innerWidth <= 720) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
    trigger.addEventListener("keydown", function (e) {
      if (window.innerWidth <= 720 && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  // close the mobile menu if the viewport is resized back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 720 && nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      if (dropdown) dropdown.classList.remove("open");
    }
  });
});
