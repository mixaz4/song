document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('band-image');
    const description = document.getElementById('description');
    const changeTextButton = document.getElementById('change-text');

    // Fade in the image
    setTimeout(function() {
        image.style.opacity = '1';
    }, 100);

    // Pop-up on image click
    image.addEventListener('click', function() {
        alert('Вы кликнули на изображение Песняров!');
    });

    // Change text on button click
    changeTextButton.addEventListener('click', function() {
        description.textContent = 'Песняры — легендарная группа, которая внесла значительный вклад в белорусскую и советскую музыкальную культуру.';
    });
});