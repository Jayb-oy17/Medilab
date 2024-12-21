/** @format */

"use strict";
const department = document.querySelectorAll(".departments");
const depText = document.querySelectorAll(".departments-text");

department.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    department.forEach((tab) => tab.classList.remove("departActive"));
    tab.classList.add("departActive");

    depText.forEach((content) => content.classList.remove("active"));
    depText[index].classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".sect");
  const revealSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };
  const observer = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });
  sections.forEach((section) => observer.observe(section));
});
