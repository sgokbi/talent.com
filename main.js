const navLink = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");
navLink.forEach((a) => {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

/// navbar top fixed
const navBar = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navBar.classList.add("header-scrolled");
  } else {
    navBar.classList.remove("header-scrolled");
  }
};
