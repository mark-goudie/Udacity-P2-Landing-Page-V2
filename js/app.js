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

// Dynamic Navigation Menu //

navElements.forEach(function (section) {
  const navlistElement = `<li><a class='main-nav-link' data-link=${section.id} href="#${section.id}">${section.dataset.nav}</li>`;
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

// Active Viewport //

// Highlight Articles Heading (Scrolling Inview) //

const articlesEl = document.querySelector(".container-img-gallery");

const obs1 = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);

  if (ent.isIntersecting === false) {
    document.body.classList.add("inview");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("inview");
  }
});
obs1.observe(articlesEl);

// Highlight Gallery Heading (Scrolling Inview) //

const galleryEl = document.querySelector(".section-hero");

const obs2 = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent);

  if (ent.isIntersecting === false) {
    document.body.classList.add("inview");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("inview");
  }
});
obs2.observe(galleryEl);
