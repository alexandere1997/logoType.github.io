let nav_header__list = document.querySelector(".nav-header__list");
let home__inner = document.querySelector(".home__inner");
nav_header__list.addEventListener("click", () => {
  home__inner.classList.toggle("active");
})