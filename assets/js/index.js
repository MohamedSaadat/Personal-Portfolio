// ------------------ initialization --------------------
// id
var themeToggleBTN = document.getElementById("theme-toggle-button");
var scrollToTopBTN = document.getElementById("scroll-to-top");
var testimonialsCarousel = document.getElementById("testimonials-carousel");
var prevTestimonialBTN = document.getElementById("prev-testimonial");
var nextTestimonialBTN = document.getElementById("next-testimonial");
var settingsToggle = document.getElementById("settings-toggle");
var closeSettingsBTN = document.getElementById("close-settings");
var settingsSidebar = document.getElementById("settings-sidebar");
var resetSettings = document.getElementById("reset-settings");
// querySelector
var menuBTN = document.querySelector(".mobile-menu");
var navLinksList = document.querySelector(".nav-links");
// querySelectorAll
var navLinks = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");
var testimonialCard = document.querySelectorAll(".testimonial-card");
var carouselIndicator = document.querySelectorAll(".carousel-indicator");
var fontOption = document.querySelectorAll(".font-option");
// ---------------------- Events ------------------------
/*[#1]scrollSpy*/
document.addEventListener("scroll", () => {
  var sectionId = "";

  // [#1] forEach() look like for loop
  // [#2] (pram) => {} arrow function (shortcut)
  sections.forEach((section) => {
    // [#3] section is pram
    var sectionTop = section.offsetTop;
    // [#4] offsetTop property returns the top position (in pixels) relative to the parent
    if (scrollY >= sectionTop - 88) {
      sectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });
});
/*menu Toggle*/
menuBTN.addEventListener("click", () => {
  navLinksList.classList.toggle("showNavLinksList");
});
/*[#2]theme Toggle*/
themeToggleBTN.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
/*[#3]navs & tabs*/
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) =>
      btn.classList.remove(
        "active",
        "hover:shadow-lg",
        "hover:shadow-primary/50",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50"
      )
    );
    button.classList.add(
      "active",
      "hover:shadow-lg",
      "hover:shadow-primary/50",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "shadow-lg",
      "shadow-primary/50"
    );
    var filterValue = button.dataset.filter;
    // items
    portfolioItems.forEach((item) => {
      var category = item.dataset.category;
      if (filterValue === "all" || category === filterValue) {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
        item.style.display = "block";
      } else {
        item.style.opacity = "0";
        item.style.transform = "scale(0.9)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});
/*[#4]carousel*/
var currentIndex = 0;
var w;
if (window.innerWidth <= 639) {
  w = 0;
  document.getElementById("screen2").classList.remove("none");
  console.log(window.innerWidth, w);
} else if (window.innerWidth <= 1023) {
  w = 1;
  document.getElementById("screen2").classList.add("none");
  console.log(window.innerWidth, w);
} else {
  w = 2;
  document.getElementById("screen1").classList.add("none");
  document.getElementById("screen2").classList.add("none");
  console.log(window.innerWidth, w);
}
// var w = window.innerWidth < 1024 ? 0 : 2;
var totalCards = testimonialCard.length - w;
function updateCarousel() {
  var cardWidth = testimonialCard[0].offsetWidth;
  var offset = currentIndex * cardWidth;
  testimonialsCarousel.style.transform = `translateX(${offset}px)`;
  carouselIndicator.forEach((bullet, index) => {
    if (index === currentIndex) {
      bullet.classList.add("bg-accent", "scale-125");
      bullet.classList.remove("bg-slate-400", "dark:bg-slate-600");
      bullet.setAttribute("aria-selected", "true");
    } else {
      bullet.classList.remove("bg-accent", "scale-125");
      bullet.classList.add("bg-slate-400", "dark:bg-slate-600");
      bullet.setAttribute("aria-selected", "false");
    }
  });
}
nextTestimonialBTN.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1;
  }
  updateCarousel();
});
prevTestimonialBTN.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});
carouselIndicator.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel();
  });
});
/*[#5]sidebar*/
// open & close slider
settingsToggle.addEventListener("click", () => {
  settingsSidebar.classList.remove("translate-x-full");
  settingsToggle.classList.add("right");
});
closeSettingsBTN.addEventListener("click",()=>{
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.classList.remove("right");
})
// change font
fontOption.forEach((button, index) => {
  var fonts = ["font-alexandria", "font-tajawal", "font-cairo"];
  button.addEventListener("click", () => {
    // for hide check mark icon from all BTNs
    fontOption.forEach((btn) => btn.classList.remove("active"));
    if (index === 0) {
      document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
      );
      document.body.classList.add(fonts[index]);
      // for view check mark icon
      button.classList.add("active");
    } else if (index === 1) {
      document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
      );
      document.body.classList.add(fonts[index]);
      // for viwe check mark icon
      button.classList.add("active");
    } else {
      document.body.classList.remove(
        "font-alexandria",
        "font-tajawal",
        "font-cairo"
      );
      document.body.classList.add(fonts[index]);
      // for viwe check mark icon
      button.classList.add("active");
    }
  });
});
// change color

// reset settings
resetSettings.addEventListener("click", () => {
  window.location.reload();
});
/*[#6]scroll to top*/
// show BTN
document.addEventListener("scroll", () => {
  if (scrollY > 300) {
    scrollToTopBTN.classList.remove("opacity-0", "invisible");
  } else {
    scrollToTopBTN.classList.add("opacity-0", "invisible");
  }
});
// click
scrollToTopBTN.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
