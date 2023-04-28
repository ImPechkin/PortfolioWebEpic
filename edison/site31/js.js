const  stars = document.querySelectorAll('#star');

const popup = document.querySelector('.popup');
const close = document.querySelector('.popup .close');


stars.forEach(stars => {
    const duration = Math.random() * 0.6 + 0.6;
    stars.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('preload-finish');

    setTimeout(() => {
        popup.style.display = 'block';
    }, 2000);
});

close.onclick = () => {
    popup.style.display = 'none';
};