// Get all elements with the class "panel"
const barImage = document.getElementsByClassName('barImage');

// Add a click event listener to each panel
Array.from(barImage).forEach(barImage => {
    barImage.addEventListener('click', () => {
        // Reset all panels by removing the "active" class
        removeActiveClasses();

        // Make the clicked panel active by adding the "active" class
        barImage.classList.add('active');
    });
});

// Function to remove the "active" class from all panels
function removeActiveClasses() {
    Array.from(barImage).forEach(barImage => {
        barImage.classList.remove('active');
    });
}
