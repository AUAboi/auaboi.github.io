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

function toggle() {
  burger.classList.toggle("toggle");
}
