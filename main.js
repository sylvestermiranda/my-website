document.getElementById('contact-button').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'block';
    document.getElementById('blur-background').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
    document.getElementById('blur-background').style.display = 'none';
});
 