let navBar = document.querySelector("#navbar");
let navbarIcon = document.querySelector("#navbar .judul-position");

window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 50) {
    navBar.style.padding = "0px 10% 2px 2px";
    navbarIcon.style.paddingTop = "5px";
  } else {
    navBar.style.padding = "0px 10% 10px 2px";
  }
});
