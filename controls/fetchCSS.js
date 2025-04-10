fetch("../model/components/cssLinks.html")
  .then((response) => response.text())
  .then((data) => {
    document.head.innerHTML += data; // <head> içine ekle
  })
  .catch((error) => console.error("Head yüklenemedi:", error));
{
  /* <script>
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = $(this).data('include')
    $(this).load(file)
  })
})
</script> */
}
