// let mybutton = document.getElementById("mysend");
// function sendEmail() {
//   (window.location.href =
//     "mailto:denem@hotmail.com?subject=İletişim Talebi&body=Merhaba, sizinle iletişime geçmek istiyorum.").then(
//     function (message) {
//       alert(
//         "Mesajınız için çok teşekkürler! 🌟 En kısa sürede dönüş yapacağım. Harika bir gün dilerim!"
//       ); // Alert message on successful email delivery
//     }
//   );
// }

// mybutton.addEventListener("click", sendEmail);
let mybutton = document.getElementById("mysend");

function sendEmail() {
  alert(
    "Mesajınız için çok teşekkürler! 🌟 En kısa sürede dönüş yapacağım. Harika bir gün dilerim!"
  );
  window.location.href =
    "mailto:denem@hotmail.com?subject=İletişim Talebi&body=Merhaba, sizinle iletişime geçmek istiyorum.";
}

mybutton.addEventListener("click", sendEmail);
