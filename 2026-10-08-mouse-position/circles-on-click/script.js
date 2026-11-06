function addBox(event) {
    // clientX/clientY are where the mouse was clicked, in pixels from the top-left corner of the window
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Math.random() * 255 gives a random number from 0 to 255 for each of red, green and blue
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    const box = document.createElement('div');
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.borderRadius = '50%'; // turns the square box into a circle
    box.style.backgroundColor = randomColor;
    box.style.position = 'absolute';

    // left and top place the circle's top-left corner. If we used mouseX and mouseY directly, that corner would land on the cursor and the circle would hang down and to the right.
    // The circles are 100px wide, so subtracting 50px (half) puts the center on the cursor.
    box.style.left = `${mouseX - 50}px`;
    box.style.top = `${mouseY - 50}px`;

    document.body.append(box);
}

document.addEventListener('click', addBox); // try 'mousemove' instead of 'click'
