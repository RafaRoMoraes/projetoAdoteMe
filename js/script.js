const btnMobile = document.getElementById('mobile-menu');
const sec = document.getElementById('secundarios');

btnMobile.addEventListener('click', () => {
    sec.classList.toggle('active');
})