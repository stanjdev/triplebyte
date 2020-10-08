
let button = document.querySelector(".burgerButton");
let burgerMenu = document.querySelector('.burgerMenu');

button.addEventListener('click', function() {
  burgerMenu.classList.toggle('menu-expanded');
  button.classList.toggle('expanded');
});