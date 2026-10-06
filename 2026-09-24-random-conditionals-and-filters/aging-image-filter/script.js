// ------------------------ simple version of our image project, no timeout ------------------------

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
//     image.style.width = '250px';
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
// }

// let imageIndex = 0; // we need this to track which image in the array to show next. We didn't need it with the colors because we didn't use an array this time but random color generation


// for (let imageCount = 0; imageCount < 30; imageCount = imageCount + 1) {
//     if (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex];

//     addImage(currentImage, Math.random() * 360);

//     imageIndex = imageIndex + 1;
// }


// ------------------------ adding image filters ------------------------

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
//     image.style.width = '250px';
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
//     return image; // new: hand back a reference to the image we just created.
//     // That call runs addImage, hits return image; at the end, and the value it returns (the <img> element) becomes the image variable in the loop. Then the lines after the call use that same image variable directly
// }

// let imageIndex = 0;


// for (let imageCount = 0; imageCount < 30; imageCount = imageCount + 1) {
//     if (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex];
//     const image = addImage(currentImage, Math.random() * 90 - 45); // new: capture the returned image

//     image.style.transition = 'filter 30s';
//     image.style.filter = `grayscale(1) sepia(1) hue-rotate(180deg)`;

//     imageIndex = imageIndex + 1;
// }


// ------------------------ delaying image filters ------------------------

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
//     image.style.width = '250px';
//     image.src = ourSource;
//     image.style.transform = `rotate(${ourRotation}deg)`;
//     document.body.appendChild(image);
//     return image; // new: hand back a reference to the image we just created.
//     // That call runs addImage, hits return image; at the end, and the value it returns (the <img> element) becomes the image variable in the loop. Then the lines after the call use that same image variable directly
// }

// let imageIndex = 0;


// for (let imageCount = 0; imageCount < 30; imageCount = imageCount + 1) {
//     if (imageIndex >= images.length) {
//         imageIndex = 0;
//     }

//     const currentImage = images[imageIndex];
//     const image = addImage(currentImage, Math.random() * 90 - 45); // new: capture the returned image

//     image.style.transition = 'filter 30s';
//     setTimeout(function() {
//         image.style.filter = `grayscale(1) sepia(1) hue-rotate(180deg)`;
//     }, 50);
//     imageIndex = imageIndex + 1;
// }


// ------------------------ delaying image filters addImage ------------------------

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
    image.style.width = '250px';
    image.src = ourSource;
    image.style.transform = `rotate(${ourRotation}deg)`;
    document.body.appendChild(image);
    return image; // new: hand back a reference to the image we just created.
    // That call runs addImage, hits return image; at the end, and the value it returns (the <img> element) becomes the image variable in the loop. Then the lines after the call use that same image variable directly
}

let imageIndex = 0;


for (let imageCount = 0; imageCount < 30; imageCount = imageCount + 1) {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }

    const currentImage = images[imageIndex];

    setTimeout(function() {
        const image = addImage(currentImage, Math.random() * 90 - 45);

        image.style.transition = 'filter 30s';
        setTimeout(function() {
            image.style.filter = `grayscale(1) sepia(1) hue-rotate(180deg)`;
        }, 50);
    }, imageCount * 1000);

    imageIndex = imageIndex + 1;
}
