/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 *
 * 

 * Define Global Variable
 */

const navBar = document.querySelector(".main-nav-items");
const navElements = document.querySelectorAll("section");
const sections = document.querySelectorAll("section");

// Dynamic Navigation Menu //

navElements.forEach(function (section) {
  const navlistElement = `<li><a class='main-nav-link ${section.id}' id="${section.id}-nav" data-link=${section.id} href="#${section.id}">${section.dataset.nav}</li>`;
  navBar.insertAdjacentHTML("beforeend", navlistElement);
});

// Smooth scrolling animation //

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to anchor ID using scrollTO event //

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links //

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation //

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Active Mobile navigation //

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation //

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// Checks if the div is in viewport //

// const isInViewport = function (elem) {
//   const bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Applies the CSS (transform) when in view //

let containers = document.getElementsByClassName("cont");

const containerArray = [...containers];

containerArray.forEach((container) => {
  const id = container.getAttribute("id");
  const navItem = document.getElementById(`${id}-nav`);

  window.addEventListener("scroll", (e) => {
    if (isInViewport(container)) {
      container.classList.add("container-active");
      navItem.classList.add("nav-active");
    } else {
      container.classList.remove("container-active");
      navItem.classList.remove("nav-active");
    }
  });
});
