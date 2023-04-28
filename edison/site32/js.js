const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

textarea.addEventListener('keyup', () => {
    count.innerHTML = textarea.value.replace(/\s/g, '').length;
});