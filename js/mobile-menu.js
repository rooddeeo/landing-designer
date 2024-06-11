function toggleMenu() {
  const menu = document.querySelector(".header-mob-menu");
  const backdrop = document.querySelector(".backdrop");
  menu.classList.toggle("open");
  backdrop.classList.toggle("backdropOn");
}
