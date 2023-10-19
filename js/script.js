const navItems = document.querySelectorAll(".navigation__item");

navItems.forEach (navItem => {
  const navLink = navItem.querySelector(".navigation__link");
  const popup = navItem.querySelector(".popup");

  navLink.addEventListener("click", function () {
    navLink.classList.toggle("popup--opened");
    popup.classList.toggle("popup--hidden");
  });
});

const buttonFeedback = document.querySelector(".button--feedback");
const modal = document.querySelector(".modal");
const modalClose = modal.querySelector(".modal__close-button");

buttonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault;
  modal.classList.remove("modal--closed");
});
modalClose.addEventListener("click", function () {
  modal.classList.add("modal--closed");
});
