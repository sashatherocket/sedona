import $ from "jquery";



class MobileMenu {
  constructor() {
    this.menuContent = $(".mobile-menu");
    this.menuIcon = $(".site-header__menu-icon");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("mobile-menu--hidden");
  }
}

export default MobileMenu;
