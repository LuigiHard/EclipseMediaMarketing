// Get all header links
const headerLinks = document.querySelectorAll('header a');

// Add click event listener to each header link
headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the target section ID from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Scroll to the target section
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});