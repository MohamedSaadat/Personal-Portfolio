// ------------------ initialization --------------------
var themeToggleBTN = document.getElementById("theme-toggle-button");
var scrollToTopBTN = document.getElementById("scroll-to-top");
var navLinks = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
var menuBTN = document.querySelector(".mobile-menu");
var navLinksList = document.querySelector(".nav-links");
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
/*[#2]menu Toggle*/
menuBTN.addEventListener("click", () => {
  navLinksList.classList.toggle("showNavLinksList");
});
/*[#3]theme Toggle*/
themeToggleBTN.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
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
