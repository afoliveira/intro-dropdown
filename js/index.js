const menuItems = document.querySelectorAll(".menu-with-submenu");
const btnMobile = document.getElementById("btn-mobile");
const closeSidebar = document.querySelector(".close-menu");

const activeSubMenu = (event) => {
  event.preventDefault();

  const menuAtual = event.currentTarget;
  const subMenuAtual = menuAtual.querySelector(".submenu");
  const arrowMenuImg = menuAtual.querySelector("a .arrow");

  subMenuAtual.classList.toggle("active");
  arrowMenuImg.setAttribute("src", "./assets/images/icon-arrow-up.svg");

  const active = document.querySelector(".submenu.active");

  if (!active)
    arrowMenuImg.setAttribute("src", "./assets/images/icon-arrow-down.svg");
};

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", activeSubMenu);
});

const openMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.add("active");
};

btnMobile.addEventListener("click", openMenu);

const closeMenu = () => {
  const nav = document.getElementById("nav");
  nav.classList.remove("active");
};

closeSidebar.addEventListener("click", closeMenu);
