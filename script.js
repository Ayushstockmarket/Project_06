const store_element = document.querySelector('.box_event'); // Select the box element
// Initial position values
let topPosition = 0;
let leftPosition = 0;
// Set initial position
store_element.style.top = topPosition + "px";
store_element.style.left = leftPosition + "px";
window.addEventListener('keydown', (e) => {    
    const step = 10; // How much the div moves with each key press
    let keydown_store = e.key; // Get the key pressed

    // Move the box based on the key pressed
    if (keydown_store === 'ArrowUp') {
        topPosition -= step;
        store_element.style.top = topPosition + "px";
    } else if (keydown_store === 'ArrowDown') {
        topPosition += step;
        store_element.style.top = topPosition + "px";
    } else if (keydown_store === 'ArrowLeft') {
        leftPosition -= step;
        store_element.style.left = leftPosition + "px";
    } else if (keydown_store === 'ArrowRight') {
        leftPosition += step;
        store_element.style.left = leftPosition + "px";
    }
});
