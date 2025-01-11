const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    menuToggle.innerHTML = `<i class="material-icons">menu</i>`;
  } else {
    menuToggle.innerHTML = `<i class="material-icons">close</i>`;
  }
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document
  .getElementById("prevButton")
  .addEventListener("click", () => swiper.slidePrev());
document
  .getElementById("nextButton")
  .addEventListener("click", () => swiper.slideNext());