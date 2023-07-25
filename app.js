const menuIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});