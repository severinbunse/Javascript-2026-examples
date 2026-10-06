// This is the function that runs every time the image is clicked
// (see the onclick="changeImage()" attribute on the <img> in the HTML).
function changeImage() {

    // Find the image element in the page by its id, and store a
    // reference to it so we can read and change its "src" below.
    const image = document.getElementById('myImage');

    // Store a reference to the page's <body> element too, so we can
    // change its background color below.
    const body = document.body;

    // Check the image source using the 'src' attribute
    if (image.getAttribute('src') === "images/lightOn.png") { // if the image source matches lightOn...
        image.src = "images/lightOff.png"; // ...change image source to lightsOff
        body.style.backgroundColor = "black"; // and change background to black
    } else { // if it doesn't...
        image.src = "images/lightOn.png"; // ...Change image source to lightsOn
        body.style.backgroundColor = "white"; // Change background to white
    }
    // Only one of the two branches above runs each time the function is
    // called — that's what makes this a toggle, flipping back and forth.
}
