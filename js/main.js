const menuBtn = document.querySelector('.m-menu');
const sidebar = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});