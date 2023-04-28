function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
}

const menuItems = document.querySelectorAll('.menu-item');

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onmouseout = () => {
        document.getElementById('slide').src = 'image/black.jpg';
    }
    menuItems[i].onmouseenter = () => {
        document.getElementById('slide').src = `image/img${i + 1}.jpg`;
    }
}