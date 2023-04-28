const  stars = document.querySelectorAll('#star');

stars.forEach(stars => {
    const duration = Math.random() * 0.6 + 0.6;
    stars.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('preload-finish');
})