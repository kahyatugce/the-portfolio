const menuOpenButton = document.querySelector("#menu-open-button");
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
const menuCloseButton = document.querySelector("#menu-close-button");
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
// ? dropdown için
document.addEventListener("DOMContentLoaded", function () {
  fetch("dropdown.html") // dropdown.html'yi getir
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("dropdown-container").innerHTML = data; // İçeriği ekle
    })
    .catch((error) => console.error("Error loading dropdown:", error));
});
