"use strict";

// =======ADD MULTIPLE ELEMENTS=========

const addEventOnElements = (elements, eventType, callback) => {
  for (const e of elements) e.addEventListener(eventType, callback);
};

// ======TOOGLE SEARCH BOX IN MOBILE=========

const searchBox = document.querySelector("[search-box]");
const searchToggler = document.querySelectorAll("[search-toggler]");

function toggleSearch () {
  searchBox.classList.add("active")
  document.body.classList.toggle('nav-active');
}

addEventOnElements(searchToggler, "click", toggleSearch)