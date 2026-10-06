// ------------------------ simple loop ------------------------


// function addBox(ourRotation) { // parameters are a placeholder that holds whatever value gets passed in when function is called
//     const box = document.createElement('div'); // create a variable inside a function when you need something fresh/local each time the function runs — like a new box per call here. createElement only makes a new div in memory, is not yet attached to the document tree.
//     box.style.width = '250px';
//     box.style.height = '250px';
//     box.style.backgroundColor = 'black';
//     box.style.transform = `rotate(${ourRotation}deg)`; // template literal with its backticks
//     document.body.appendChild(box); // actually places the div in the body.
// }


// for (let boxIndex = 0; boxIndex < 300; boxIndex++) { // could have also been (let i = 0; i < 300; i++)
//     addBox(boxIndex * 22.5); // calling the function. It recognizes the parameters by position in (), the parameter names only exist within the function. (boxIndex * 22.5) follows the same function as the timeout function last class. The multiplication just scales whatever that current number is: on iteration 0, 0 * 22.5 = 0°; iteration 1, 1 * 22.5 = 22.5°; iteration 2, 2 * 22.5 = 45°; and so on.
// }


// ------------------------ color added ------------------------
// this function adds a new div, then changes the size, color and rotation.


// function addBox(ourRotation, ourColor) { // CHANGED: added a second parameter, ourColor instead of being fixed
//     const box = document.createElement('div');

//     box.style.width = '250px';
//     box.style.height = '250px';
//     box.style.backgroundColor = ourColor; // CHANGED: was hardcoded to 'black' before, now uses the ourColor parameter — this here is still our parameter
//     box.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(box);
// }


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', // NEW: array of colors to cycle through, didn't exist in the simple loop version
//     'pink', 'brown', 'teal', 'navy', 'maroon', 'olive',
//     'lime', 'cyan', 'magenta', 'gold', 'coral', 'turquoise',
//     'indigo', 'violet'];

// let colorIndex = 0; // NEW: initialize a variable to keep track of the current color index. it needs to persist and change across iterations, which is why it's outside of the loop; Otherwise it would reset to 0 every time.

// for (let boxIndex = 0; boxIndex < 300; boxIndex++) {
//     while (colorIndex >= colors.length) { // NEW: once colorIndex runs past the end of the colors array, reset it to 0 so the loop starts cycling through the colors again
//         colorIndex = 0;
//     }

//     addBox(boxIndex * 22.5, colors[colorIndex]); // CHANGED: now passing colors[colorIndex] as the second argument

//     colorIndex++; // alternatively colorIndex = colorIndex + 1;
// }


// ------------------------ and now with delay ------------------------


// function addBox(ourRotation, ourColor) {
//     const box = document.createElement('div');
//     box.style.width = '250px';
//     box.style.height = '250px';
//     box.style.backgroundColor = ourColor;
//     box.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(box);
// }


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple',
//     'pink', 'brown', 'teal', 'navy', 'maroon', 'olive',
//     'lime', 'cyan', 'magenta', 'gold', 'coral', 'turquoise',
//     'indigo', 'violet'];

// let colorIndex = 0;

// for (let boxIndex = 0; boxIndex < 300; boxIndex++) {
//     while (colorIndex >= colors.length) {
//         colorIndex = 0;
//     }

//     const currentColor = colors[colorIndex]; // store the current color in a variable to use inside the setTimeout callback because the colorIndex will change before the timeout executes. We grab currentColor right then — during the loop, before any delay — specifically because we want to lock in "what color is colorIndex pointing at right now" before the loop moves on and changes colorIndex for the next iteration.

//     setTimeout(function() {
//         addBox(boxIndex * 22.5, currentColor); // use the stored color instead of accessing the global colorIndex directly. because the setTimeout callback will execute after the loop has completed, the colorIndex will have changed, leading to unexpected results if we accessed it directly.
//     }, boxIndex * 1000);

//     colorIndex++;
// }


// ------------------------ let's make our parameters random and add an if statement ------------------------


// function addBox(ourRotation, ourColor) {
//     const box = document.createElement('div');
//     box.style.width = '250px';
//     box.style.height = '250px';
//     box.style.backgroundColor = ourColor;
//     box.style.transform = `rotate(${ourRotation}deg)`;

//     if (ourRotation > 180) {
//         box.style.borderRadius = '50%';
//     }

//     document.body.appendChild(box);
// }


// for (let boxIndex = 0; boxIndex < 300; boxIndex++) {
//     const randomRotation = Math.random() * 360;
//     const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

//     setTimeout(function() {
//         addBox(randomRotation, randomColor);
//     }, boxIndex * 1000);
// }


// ------------------------ let's make more parameters random and add delay ------------------------


function addBox(ourRotation, ourColor, ourWidth, ourHeight) {
    const box = document.createElement('div');
    box.style.width = `${ourWidth}px`;
    box.style.height = `${ourHeight}px`;
    box.style.backgroundColor = ourColor;
    box.style.transform = `rotate(${ourRotation}deg)`;

    if (ourRotation > 180) {
        box.style.borderRadius = '50%';
    }

    document.body.appendChild(box);
}


for (let boxIndex = 0; boxIndex < 300; boxIndex++) {
    const randomRotation = Math.random() * 360;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 150 + 100;

    setTimeout(function() {
        addBox(randomRotation, randomColor, randomWidth, randomHeight);
    }, boxIndex * 1000);
}
