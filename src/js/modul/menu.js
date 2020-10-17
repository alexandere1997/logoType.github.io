
let menu = () => {
  let nav_header__list = document.querySelector(".nav-header__list");
  let home__inner = document.querySelector(".home__inner");
  let nav__header__list = document.querySelector(".nav-header__list img")
  nav_header__list.addEventListener("click", () => {
    home__inner.classList.toggle("active");
    nav__header__list.classList.toggle("transformMenu");
  })
}


export default menu;