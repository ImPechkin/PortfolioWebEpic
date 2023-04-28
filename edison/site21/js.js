const banner = document.getElementsByClassName('banner')[0];

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const block = document.createElement('div');
        block.classList.add('blocks');

        block.style.animationDirection = Math.random() * 5 + 2 + 's';
        block.style.animationDelay = Math.random() * 5 + 's';

        banner.append(block);
    }
}