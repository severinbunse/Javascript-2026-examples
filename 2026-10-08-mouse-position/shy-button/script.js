const button = document.getElementById('button');

document.addEventListener('mousemove', function(event) {
    // getBoundingClientRect asks the browser where the button is right now and how big it is.
    // It gives back left, top, width and height in pixels, measured from the top-left corner of the window (same as clientX/clientY).
    // rect is short for rectangle, because every element takes up a rectangle on the page.
    const rect = button.getBoundingClientRect();

    // left and top are the button's top-left corner. Adding half the width and height moves us to the center.
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    // Math.hypot gives the straight-line distance between the mouse and the button's center (the Pythagorean theorem).
    // e.g. 30px across and 40px down is 50px away.
    const distance = Math.hypot(event.clientX - buttonX, event.clientY - buttonY);

    if (distance < 100) {
        // left and top place the button's top-left corner, so we subtract the button's size to keep the whole button inside the window.
        // Without it, the button could land near the edge and hang off-screen, and since overflow is hidden you couldn't scroll to find it.
        button.style.left = `${Math.random() * (window.innerWidth - rect.width)}px`;
        button.style.top = `${Math.random() * (window.innerHeight - rect.height)}px`;
    }
});

button.addEventListener('click', function() {
    alert('You got me!');
});
