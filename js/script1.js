// Get all slide elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; // Initialize the current slide index

// Get the slider div
const sliderDiv = document.querySelector('.slider');

// Expose the sliderDiv to the global window object for console access
window.slider = sliderDiv;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.display = 'none'; // Set display to none
    });

    // Show the current slide
    slides[index].classList.add('active');
    slides[index].style.display = 'block'; // Set display to block
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

// Optional: Add event listeners to buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));
