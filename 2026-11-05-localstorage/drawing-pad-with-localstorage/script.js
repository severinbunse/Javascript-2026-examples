// 1. The things we need
const pad = document.querySelector('#pad');
let isDrawing = false; // a true/false variable that works like a switch. It starts as false; pressing the mouse button on the pad flips it to true (see step 3).
let dotsArray = [];   // every dot we draw ends up in here


// 2. A function that draws one dot.
// Putting the dot code in a function means the same code can draw new dots and dots loaded from localStorage.
function drawDot(dotX, dotY) {
    const dot = document.createElement('div');
    dot.style.width = '6px';
    dot.style.height = '6px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'black';
    dot.style.position = 'absolute';
    dot.style.left = `${dotX - 3}px`;
    dot.style.top = `${dotY - 3}px`;

    // offsetX/Y are measured from whatever element the mouse is over. If you move over a dot you just drew, the mouse is over the dot, not the pad, so offsetX would be something like 2 (inside the 6px dot).
    // pointerEvents = 'none' makes the browser ignore the dots, so the mouse always counts as being over the pad.
    dot.style.pointerEvents = 'none';

    pad.append(dot);
}


// 3. Drawing with the mouse
pad.addEventListener('mousedown', function() {
    isDrawing = true;
});

pad.addEventListener('mousemove', function(event) {
    // mousemove fires whenever the mouse moves over the pad, so we only draw while the mouse button is held down
    if (isDrawing) {
        // offsetX/Y are measured from the pad's corner, not the window's
        const mouseX = event.offsetX; // how many pixels the mouse is from the pad's left edge
        const mouseY = event.offsetY; // how many pixels the mouse is from the pad's top edge

        drawDot(mouseX, mouseY);
        dotsArray.push({ x: mouseX, y: mouseY });   // remember the dot so it can be saved. .push() adds this object to the end of dotsArray
    }
});


// 4. Saving: when the mouse is let go. localStorage only stores strings, so we turn the array into JSON text.
document.addEventListener('mouseup', function() {
    isDrawing = false;
    localStorage.setItem('drawing-pad', JSON.stringify(dotsArray)); // 'drawing-pad' is the key (the name we save it under), dotsArray is the array from step 1
});


// 5. Loading: when the page opens. The first time, nothing is saved yet and getItem gives back null, so we check first.
const savedJSON = localStorage.getItem('drawing-pad');

if (savedJSON) {
    dotsArray = JSON.parse(savedJSON);   // turn the JSON text back into an array

    dotsArray.forEach(function(savedDot) {  // forEach hands each saved dot in the array, like {x: 120, y: 45}, to savedDot one at a time
        drawDot(savedDot.x, savedDot.y);
    });
}


// 6. Clearing: forget the saved drawing and empty the pad
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', function() {
    localStorage.removeItem('drawing-pad'); // deletes whatever is saved under the 'drawing-pad' key
    dotsArray = []; // start over with a new, empty array
    pad.innerHTML = ''; // remove the dots from the screen. innerHTML is everything inside an element, as HTML
});
