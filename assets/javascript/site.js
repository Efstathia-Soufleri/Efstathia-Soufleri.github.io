// Keeps the footer copyright year current automatically.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('copyyear');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
});