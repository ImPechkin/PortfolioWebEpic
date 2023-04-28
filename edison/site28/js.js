const liItems = document.querySelectorAll('.filter-menu li');
const imgItems = document.querySelectorAll('.product .itemBox');

liItems.forEach(li => {
    li.onclick = () => {
        liItems.forEach(li => li.classList.remove('active'));
        li.classList.add('active');

        const value = li.textContent.toLowerCase();
        imgItems.forEach(img => {
            img.classList.add('delete');
            img.classList.remove('active');
            if (img.getAttribute('data-item') === value || value === 'all') {
                img.classList.add('active');
                img.classList.remove('delete');
            }
        })
    }

});