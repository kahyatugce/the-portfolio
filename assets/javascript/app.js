// ? navbar mediaQuery 920px
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;

// Menü açma butonuna tıklanırsa menüyü aç
menuOpenButton.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

// Menü kapama butonuna tıklanırsa menüyü kapat
menuCloseButton.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});

// Eğer kullanıcı menünün dışında bir yere tıklarsa menüyü kapat
body.addEventListener("click", (event) => {
  if (
    !event.target.closest(".navbar") &&
    !event.target.closest("#menu-open-button")
  ) {
    body.classList.remove("show-mobile-menu");
  }
});
