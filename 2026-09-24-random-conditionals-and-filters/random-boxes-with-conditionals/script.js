// // let's go back to some simple colored div generation but let's pick out colors at random instead of using arrays. let's also add an if statement

// function addBox(ourWidth, ourHeight, ourColor, ourRotation) {
//     const box = document.createElement('div');
//     box.style.width = `${ourWidth}px`; // template literals
//     box.style.height = `${ourHeight}px`;
//     box.style.backgroundColor = ourColor;
//     box.style.transform = `rotate(${ourRotation}deg)`; // look at CSS file

//     if (ourRotation > 180) {
//         box.style.borderRadius = '50%';
//     }

//     document.body.appendChild(box);
// }


// for (let boxIndex = 0; boxIndex < 300; boxIndex = boxIndex + 1) {
//     const randomWidth = Math.random() * 150 + 100;
//     const randomHeight = Math.random() * 150 + 100;
//     const randomRotation = Math.random() * 360;
//     const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

//     addBox(randomWidth, randomHeight, randomColor, randomRotation); // placement in () matters here, not naming
// }


// ------------------------ let's also make the border radius random ------------------------


// function addBox(ourWidth, ourHeight, ourColor, ourRotation, ourBorderRadius) { // new parameter
//     const box = document.createElement('div');
//     box.style.width = `${ourWidth}px`;
//     box.style.height = `${ourHeight}px`;
//     box.style.backgroundColor = ourColor;
//     box.style.transform = `rotate(${ourRotation}deg)`;

//     if (ourRotation > 180) {
//         box.style.borderRadius = `${ourBorderRadius}%`;
//     }

//     document.body.appendChild(box);
// }


// for (let boxIndex = 0; boxIndex < 300; boxIndex = boxIndex + 1) {
//     const randomWidth = Math.random() * 150 + 100;
//     const randomHeight = Math.random() * 150 + 100;
//     const randomRotation = Math.random() * 360;
//     const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     const randomBorderRadius = Math.random() * 100; // new: creating border radius variable

//     addBox(randomWidth, randomHeight, randomColor, randomRotation, randomBorderRadius); // new: adding border radius argument
// }


// ------------------------ let's add some timing ------------------------


function addBox(ourWidth, ourHeight, ourColor, ourRotation, ourBorderRadius) {
    const box = document.createElement('div');
    box.style.width = `${ourWidth}px`;
    box.style.height = `${ourHeight}px`;
    box.style.backgroundColor = ourColor;
    box.style.transform = `rotate(${ourRotation}deg)`;

    if (ourRotation > 180) {
        box.style.borderRadius = `${ourBorderRadius}%`;
    }

    document.body.appendChild(box);
}


for (let boxIndex = 0; boxIndex < 300; boxIndex = boxIndex + 1) {
    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 150 + 100;
    const randomRotation = Math.random() * 360;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const randomBorderRadius = Math.random() * 100;

    setTimeout(function() { // new: add setTimeout
        addBox(randomWidth, randomHeight, randomColor, randomRotation, randomBorderRadius);
    }, boxIndex * 1000);
}


// ------------------------ next we will go to our image based code ------------------------
