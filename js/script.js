const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', function () {
    var helloText = document.querySelector('.home-text .slide .one');
    var isHelloClicked = false;

    helloText.addEventListener('click', function () {
        if (isHelloClicked) {
            // Jika sudah diklik, reset ke warna aslinya
            helloText.style.color = '#fff';
        } else {
            // Jika tidak diklik, ubah warnanya menjadi kuning
            helloText.style.color = '#ffd700';
        }

        isHelloClicked = !isHelloClicked;
    });
});


// Modal About
var aboutModal = document.getElementById('aboutModal');
var aboutReadMore = document.querySelector('.about .btn');
var aboutCloseBtn = document.getElementById('aboutModal').querySelector('.close');

// Open 
aboutReadMore.addEventListener('click', function () {
    aboutModal.style.display = 'block';
});

// Close
aboutCloseBtn.addEventListener('click', function () {
    aboutModal.style.display = 'none';
});

// Close about modal 
window.addEventListener('click', function (event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = 'none';
    }
});


// film modal
var filmModal = document.getElementById('filmModal');
var filmReadMore = document.querySelector('.portfolio .box:nth-child(1) .read');
var filmCloseBtn = document.querySelector('.modal-film .close-film');

// Open film modal
filmReadMore.addEventListener('click', function () {
    filmModal.style.display = 'block';
});

// Close film modal
filmCloseBtn.addEventListener('click', function () {
    filmModal.style.display = 'none';
});

// Close film modal 
window.addEventListener('click', function (event) {
    if (event.target == filmModal) {
        filmModal.style.display = 'none';
    }
});

// music modal
var musicModal = document.getElementById('musicModal');
var musicReadMore = document.querySelector('.portfolio .box:nth-child(2) .read');
var musicCloseBtn = document.querySelector('.modal-music .close-music');

// Open music modal
musicReadMore.addEventListener('click', function () {
    musicModal.style.display = 'block';
});

// Close music modal
musicCloseBtn.addEventListener('click', function () {
    musicModal.style.display = 'none';
});

// Close music modal 
window.addEventListener('click', function (event) {
    if (event.target == musicModal) {
        musicModal.style.display = 'none';
    }
});