var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    // document.getElementById("header").classList.add("sticky");
  } else {
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-list");
function toggle() {
  burger.classList.toggle("toggle");
}

function showNav() {
  nav.classList.toggle("nav-active");
  toggle();
}

const body = document.querySelector(".body");
const lightSwitch = document.querySelector(".light-switch");
const darkSwitch = document.querySelector(".dark-switch");

function switchColor() {
  body.classList.toggle("light-mode");
  lightSwitch.toggle("active");
  darkSwitch.toggle("active");
}
