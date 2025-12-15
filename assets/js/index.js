// ------------------ initialization --------------------
// id
var themeToggleBTN = document.getElementById("theme-toggle-button");
var scrollToTopBTN = document.getElementById("scroll-to-top");
// querySelector
var menuBTN = document.querySelector(".mobile-menu");
var navLinksList = document.querySelector(".nav-links");
// querySelectorAll
var navLinks = document.querySelectorAll(".nav-links a");
var sections = document.querySelectorAll("section");
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");
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
    filterButtons.forEach((btn) => btn.classList.remove(
      "active","hover:shadow-lg","hover:shadow-primary/50","bg-linear-to-r","from-primary","to-secondary","text-white","shadow-lg","shadow-primary/50"
    ));
    button.classList.add(
      "active",
      "hover:shadow-lg","hover:shadow-primary/50","bg-linear-to-r","from-primary","to-secondary","text-white","shadow-lg","shadow-primary/50"
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
/*[#5]sidebar*/
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
