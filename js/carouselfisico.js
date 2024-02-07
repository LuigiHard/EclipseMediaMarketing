const otherImagePath = './othercarousel'; // Define the base path for images
function initializeOtherCarousel(otherImagePath, otherImageCount, otherCarouselId, otherPrevButtonId, otherNextButtonId) {
    document.addEventListener('DOMContentLoaded', () => {
        const otherImages = Array.from({ length: otherImageCount }, (_, i) => `${otherImagePath}/image${i + 1}.png`);
        const otherCarousel = document.getElementById(otherCarouselId);
        let otherCurrentIndex = 0;

        function updateOtherCarousel() {
            otherCarousel.innerHTML = ''; // Clear current images
            otherCarousel.style.display = 'flex'; // Use flexbox layout
            otherCarousel.style.justifyContent = 'center'; // Center the images horizontally
            otherCarousel.style.alignItems = 'center'; // Center the images vertically

            const otherVisibleImages = [
                otherImages[(otherCurrentIndex - 1 + otherImages.length) % otherImages.length], // Left image
                otherImages[otherCurrentIndex], // Center image
                otherImages[(otherCurrentIndex + 1) % otherImages.length], // Right image
            ];

            otherVisibleImages.forEach((src, index) => {
                const ImgDiv = document.createElement('div');
                ImgDiv.classList.add('img-wrapper'); // Add class for styling

                // Set fixed sizes
                if (index === 1) { // Center image
                    ImgDiv.style.width = '500px'; // Larger size for the center image
                    ImgDiv.style.height = '500px';
                } else { // Side images
                    ImgDiv.style.width = '250px'; // Smaller size for side images
                    ImgDiv.style.height = '250px';
                    ImgDiv.style.margin = '0 4rem'; // Add margin between images
                }

                ImgDiv.style.borderRadius = '0.5rem';
                ImgDiv.style.overflow = 'hidden';
                ImgDiv.style.transition = 'transform 0.5s ease-in-out';

                const otherImg = document.createElement('img');
                otherImg.src = src;
                otherImg.alt = `Image ${src.substring(src.lastIndexOf('/') + 1)}`;
                otherImg.classList.add('carousel-img'); // Add class for styling
                otherImg.style.width = '100%';
                otherImg.style.height = '100%';
                otherImg.style.objectFit = 'cover';

                otherImgDiv.appendChild(otherImg);
                otherCarousel.appendChild(otherImgDiv);
            });
        }

        document.getElementById(otherPrevButtonId).addEventListener('click', () => {
            otherCurrentIndex = (otherCurrentIndex - 1 + otherImages.length) % otherImages.length;
            updateOtherCarousel();
        });

        document.getElementById(otherNextButtonId).addEventListener('click', () => {
            otherCurrentIndex = (otherCurrentIndex + 1) % otherImages.length;
            updateOtherCarousel();
        });

        updateOtherCarousel(); // Initialize carousel
    });
}
