// Get all slide elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Initialize the current slide index

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        // Set the display to none for non-active slides
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].classList.add('active');
    slides[index].style.display = 'block';
}

// Function to change slide
function changeSlide(direction) {
    // Update the current slide index based on direction
    currentSlide += direction;

    // Loop around the slides
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Go to first slide
    }

    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);
