const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const backDrop = document.querySelector('.backdrop');

toggleButton.addEventListener('click', function () {
    mobileNav.style.display = 'block';
    backDrop.style.display = 'block';
});

backDrop.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    backDrop.style.display = 'none';
});
