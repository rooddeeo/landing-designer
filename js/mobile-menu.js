function toggleMenu() {
  var menu = document.querySelector(".header-mob-menu");
  var backdrop = document.querySelector(".backdrop");
  menu.classList.toggle("open");
  backdrop.classList.toggle("backdropOn");
}
