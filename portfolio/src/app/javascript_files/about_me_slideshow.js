// Initialize the slide index to 0
let slideIndex = 0;

// Call the function to show slides
showSlides();

// Function to display the slides
function showSlides() {
    let i;
    // Get all elements with the class name "mySlides"
    let slides = document.getElementsByClassName("mySlides");
    
    // Loop through all slides and hide them
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Increment the slide index
    slideIndex++;
    
    // If the slide index exceeds the number of slides, reset it to 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex-1].style.display = "block";  
    
    // Set a timeout to call the showSlides function every 2 seconds
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}