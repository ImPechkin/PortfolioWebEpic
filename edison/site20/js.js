const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
const cancelBtn = document.querySelector('.cancel-btn');
const searchInput = document.querySelector('input');
const searchData = document.querySelector('.search-data');


searchBtn.onclick = () => {
    searchBtn.classList.add('active');
    searchBox.classList.add('active');
    cancelBtn.classList.add('active');
    searchInput.classList.add('active');
    searchData.classList.remove('active');

    if(searchInput.value !== '') {
        searchData.classList.remove('active');
        const value = searchInput.value;
        searchData.innerHTML = `Ви ввели "${value}"`;
    }
    else {
        searchData.innerHTML = '';
    }
}

cancelBtn.onclick = () => {
    searchBtn.classList.remove('active');
    searchBox.classList.remove('active');
    cancelBtn.classList.remove('active');
    searchInput.classList.remove('active');
    searchData.classList.add('active');

    searchInput.value = '';
}