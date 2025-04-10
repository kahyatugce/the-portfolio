fetch("../model/components/jsLinks.html")
  .then((response) => response.text())
  .then((data) => {
    document.head.innerHTML += data; // <head> içine ekle
  })
  .catch((error) => console.error("Head yüklenemedi:", error));
