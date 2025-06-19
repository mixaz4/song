document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('band-image');
    
    // Появление изображения
    setTimeout(function() {
        image.style.opacity = '1';
    }, 100);
    
    // Всплывающее окно при клике на изображение
    image.addEventListener('click', function() {
        alert('Вы кликнули на изображение Песняров!');
    });
});