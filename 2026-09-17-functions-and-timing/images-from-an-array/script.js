// ------------------------ adding images and sources ------------------------

// const images = [
//     'images/154785067c16917dfafeed30dba5a5f8.jpg',
//     'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
//     'images/f16d0238b15af15682d7886902b7cf48.jpg',
//     'images/images-1.jpeg',
//     'images/images.jpeg',
//     'images/lTZeYGu.jpg',
//     'images/s-l1200-1.jpg',
//     'images/s-l1200.jpg',
//     'images/SL24ADS_VINTAGE_Brut2.jpg',
//     'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
//     'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
//     'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
// ];

// // This function creates one new image and places it in the body.
// function addImage(ourSource) {
//     const image = document.createElement('img');
//     image.src = ourSource;
//     document.body.appendChild(image);
// }

// let imageIndex = 0;

// for (let imageCount = 0; imageCount < 30; imageCount++) {
//     while (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     addImage(images[imageIndex]); // images is the array of image file path strings defined at the top, and imageIndex is a number (starting at 0) that tracks which one you want.
//     imageIndex++;
// }


// ------------------------ adding rotation ------------------------

// const images = [
//     'images/154785067c16917dfafeed30dba5a5f8.jpg',
//     'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
//     'images/f16d0238b15af15682d7886902b7cf48.jpg',
//     'images/images-1.jpeg',
//     'images/images.jpeg',
//     'images/lTZeYGu.jpg',
//     'images/s-l1200-1.jpg',
//     'images/s-l1200.jpg',
//     'images/SL24ADS_VINTAGE_Brut2.jpg',
//     'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
//     'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
//     'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
// ];


// function addImage(ourSource, ourRotation) { // new: added a second parameter, ourRotation, so each call can pass in its own angle
//     const image = document.createElement('img');
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`; // new: applies the rotation passed in via ourRotation
//     document.body.appendChild(image);
// }

// let imageIndex = 0;

// for (let imageCount = 0; imageCount < 30; imageCount++) {
//     while (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     addImage(images[imageIndex], imageCount * 22.5); // new: now passes a second argument, imageCount * 22.5, to set the rotation
//     imageIndex++;
// }


// ------------------------ adding delay ------------------------

// const images = [
//     'images/154785067c16917dfafeed30dba5a5f8.jpg',
//     'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
//     'images/f16d0238b15af15682d7886902b7cf48.jpg',
//     'images/images-1.jpeg',
//     'images/images.jpeg',
//     'images/lTZeYGu.jpg',
//     'images/s-l1200-1.jpg',
//     'images/s-l1200.jpg',
//     'images/SL24ADS_VINTAGE_Brut2.jpg',
//     'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
//     'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
//     'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
// ];


// function addImage(ourSource, ourRotation) {
//     const image = document.createElement('img');
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
// }

// let imageIndex = 0;

// for (let imageCount = 0; imageCount < 30; imageCount++) {
//     while (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex]; // new: snapshot the current image source now, before the delay

//     setTimeout(function() { // new: wraps the addImage call so it doesn't run immediately
//         addImage(currentImage, imageCount * 22.5); // new: uses currentImage (the snapshot) instead of images[imageIndex] directly
//     }, imageCount * 1000); // new: delay grows each iteration (0ms, 1000ms, 2000ms...) so images appear one second apart
//     imageIndex++;
// }


// ------------------------ adding random rotation ------------------------


const images = [
    'images/154785067c16917dfafeed30dba5a5f8.jpg',
    'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
    'images/f16d0238b15af15682d7886902b7cf48.jpg',
    'images/images-1.jpeg',
    'images/images.jpeg',
    'images/lTZeYGu.jpg',
    'images/s-l1200-1.jpg',
    'images/s-l1200.jpg',
    'images/SL24ADS_VINTAGE_Brut2.jpg',
    'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
    'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
    'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
    'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
    'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
];


function addImage(ourSource, ourRotation) {
    const image = document.createElement('img');
    image.src = ourSource;
    image.style.transform = `rotate(${ourRotation}deg)`;
    document.body.appendChild(image);
}

let imageIndex = 0;

for (let imageCount = 0; imageCount < 30; imageCount++) {
    while (imageIndex >= images.length) {
        imageIndex = 0;
    }

    const currentImage = images[imageIndex];

    setTimeout(function() {
        addImage(currentImage, Math.random() * 360); // new: Math.random() returns a random decimal between 0 and 1 (e.g. 0.732). To turn that into a random angle in degrees, you multiply it by the range you want — for a full rotation, that's Math.random() * 360. if you want a range between -45 and +45 you would do Math.random() * 90 - 45. The subtraction shifts the range down to start at -45 instead of 0. for full 360 just say *360.
    }, imageCount * 1000);
    imageIndex++;
}


// ------------------------ change color ------------------------

// const images = [
//     'images/154785067c16917dfafeed30dba5a5f8.jpg',
//     'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
//     'images/f16d0238b15af15682d7886902b7cf48.jpg',
//     'images/images-1.jpeg',
//     'images/images.jpeg',
//     'images/lTZeYGu.jpg',
//     'images/s-l1200-1.jpg',
//     'images/s-l1200.jpg',
//     'images/SL24ADS_VINTAGE_Brut2.jpg',
//     'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
//     'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
//     'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
// ];


// function addImage(ourSource, ourRotation) {
//     const image = document.createElement('img');
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
//     return image; // new: return sends the created image element back out of addImage so the code that called it can keep using that exact image — specifically to set image.style.transition and later image.style.filter on it. Without return, addImage would create and append the image, but the caller would have no way to reference that specific element afterward to keep styling it.
// }

// let imageIndex = 0;

// for (let imageCount = 0; imageCount < 100; imageCount++) {
//     while (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex];

//     setTimeout(function() {
//         const image = addImage(currentImage, Math.random() * 45 - 22.5); // new: capture the created image element
//         image.style.transition = `filter 30s`; // new: tells the browser to animate any filter change over 30 seconds
//         setTimeout(function() {
//             image.style.filter = `grayscale(1) sepia(1) hue-rotate(180deg)`; // new: the "aged" end state; browser animates smoothly toward this
//         }, 50); // new: tiny delay so the browser registers the starting (no filter) state before the change, so it has something to transition from
//     }, imageCount * 1000);
//     imageIndex++;
// }


// ------------------------ different way to write the code (easier to understand) ------------------------

// const images = [
//     'images/154785067c16917dfafeed30dba5a5f8.jpg',
//     'images/a8fc6346c6d70e70e72de8f15e50aac1.jpg',
//     'images/f16d0238b15af15682d7886902b7cf48.jpg',
//     'images/images-1.jpeg',
//     'images/images.jpeg',
//     'images/lTZeYGu.jpg',
//     'images/s-l1200-1.jpg',
//     'images/s-l1200.jpg',
//     'images/SL24ADS_VINTAGE_Brut2.jpg',
//     'images/SL24ADS_VINTAGE_CENTAUR-762x1024.jpg',
//     'images/SL24ADS_VINTAGE_Denim-1024x665.jpg',
//     'images/SL24ADS_VINTAGE_-Tabac-398x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Eau_Sauvage-722x1024.jpg',
//     'images/SL24ADS_STORYTELLING_Guerlain_Habit_Rouge.jpg'
// ];


// function addImage(ourSource, ourRotation) {
//     const image = document.createElement('img');
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
//     return image; // new: now the function gives us back the image it made
// }

// let imageIndex = 0;

// for (let imageCount = 0; imageCount < 30; imageCount++) {
//     while (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex];

//     setTimeout(function() {
//         const image = addImage(currentImage, Math.random() * 90 - 45);
//         image.style.transition = 'filter 30s';
//         setTimeout(function() {
//             image.style.filter = `grayscale(1) sepia(1) hue-rotate(180deg)`;
//         }, 50);
//     }, imageCount * 1000);
//     imageIndex++; // imageIndex = imageIndex + 1; just a statement that updates that variable's value,
// }


// addImage(...) call became const image = addImage(...) — capturing the returned element instead of just calling it and discarding the result.
// Added image.style.transition = 'filter 30s' right after — turns on animation for future filter changes on that image.
// Added a nested setTimeout that changes image.style.filter after a tiny 50ms delay — that's the actual trigger for the aging effect, timed so the transition has a "before" state to animate from.

// img {
//     filter: none;
//     transition: filter 30s;
// }

// img:hover {
//     filter: grayscale(1) sepia(1) hue-rotate(180deg);
// }
