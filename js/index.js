const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

const burgerButton = document.querySelector(".burger__button");
const burgerMenu = document.querySelector(".burger__menu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu_open");
  document.body.classList.toggle("body_backdrop");
});

document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".burger__button")) {
    burgerMenu.classList.remove("burger__menu_open");
    document.body.classList.remove("body_backdrop");
  }
});

document.querySelectorAll("header a").forEach((anchor) => {
  if (anchor.href === window.location.href) {
    anchor.classList.add("active");
  }
});
