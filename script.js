// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const toggleContent = document.querySelector('.toggle-content');
    
    toggleButton.addEventListener('click', function() {
        toggleContent.style.display = toggleContent.style.display === 'none' ? 'block' : 'none';
    });
});
