import $ from "jquery";

class MobileMenu {
  constructor() {
    this.menuContent = $(".primary-nav");
    this.menuIcon = $(".site-header__menu-icon");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    if($(window).width() >= 700) {this.menuContent.toggleClass("primary-nav--hidden");}

  }

  toggleTheMenu() {
    this.menuContent.toggleClass("primary-nav--hidden");
  }
}

export default MobileMenu;
