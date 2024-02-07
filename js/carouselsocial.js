
const imagePath = './carousel'; // Define the base path for images
function initializeCarousel(imagePath, imageCount, carouselId, prevButtonId, nextButtonId) {
    document.addEventListener('DOMContentLoaded', () => {
        const images = Array.from({ length: imageCount }, (_, i) => `${imagePath}/image${i + 1}.webp`);
        const carousel = document.getElementById(carouselId);
        let currentIndex = 0;

        function updateCarousel() {
            carousel.innerHTML = ''; // Clear current images
            carousel.style.display = 'flex'; // Use flexbox layout
            carousel.style.justifyContent = 'center'; // Center the images horizontally
            carousel.style.alignItems = 'center'; // Center the images vertically

            const visibleImages = [
                images[(currentIndex - 1 + images.length) % images.length], // Left image
                images[currentIndex], // Center image
                images[(currentIndex + 1) % images.length], // Right image
            ];

            visibleImages.forEach((src, index) => {
                const imgDiv = document.createElement('div');
                imgDiv.classList.add('img-wrapper'); // Add class for styling

                // Set fixed sizes
                if (index === 1) { // Center image
                    imgDiv.style.width = '500px'; // Larger size for the center image
                    imgDiv.style.height = '500px';
                } else { // Side images
                    imgDiv.style.width = '250px'; // Smaller size for side images
                    imgDiv.style.height = '250px';
                    imgDiv.style.margin = '0 4rem'; // Add margin between images
                }

                imgDiv.style.borderRadius = '0.5rem';
                imgDiv.style.overflow = 'hidden';
                imgDiv.style.transition = 'transform 0.5s ease-in-out';

                const img = document.createElement('img');
                img.src = src;
                img.alt = `Image ${src.substring(src.lastIndexOf('/') + 1)}`;
                img.classList.add('carousel-img'); // Add class for styling
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';

                imgDiv.appendChild(img);
                carousel.appendChild(imgDiv);
            });
        }

        document.getElementById(prevButtonId).addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        document.getElementById(nextButtonId).addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        updateCarousel(); // Initialize carousel
    });
}
