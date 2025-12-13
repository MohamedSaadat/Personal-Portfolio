var navLinks = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
var menuBTN = document.querySelector(".mobile-menu");
var navLinksList = document.querySelector(".nav-links");
function scrollSpy() {
  var sectionId = "";

  // [#1] forEach() look like for loop
  // [#2] (pram) => {} arrow function (shortcut)
  sections.forEach((section) => {
    // [#3] section is pram
    var sectionTop = section.offsetTop;
    // [#4] offsetTop property returns the top position (in pixels) relative to the parent
    if (window.scrollY >= sectionTop - 88) {
      sectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });
}
function menuToggle() {
    console.log("hi");
    navLinksList.classList.toggle("showNavLinksList")
}
document.addEventListener("scroll", scrollSpy);
menuBTN.addEventListener("click", menuToggle);

