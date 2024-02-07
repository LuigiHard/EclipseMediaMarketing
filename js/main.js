import { initializeCarousel } from './carouselsocial.js'; // Adjust the path as needed

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel('/carousel', 54, 'carousel2', 'prev', 'next');
});
import { initializeOtherCarousel } from './carouselfisico.js'; // Adjust the path as needed
document.addEventListener('DOMContentLoaded', () => {
    initializeOtherCarousel('./othercarousel', 21, 'carousel3', 'otherprev', 'othernext');
});
