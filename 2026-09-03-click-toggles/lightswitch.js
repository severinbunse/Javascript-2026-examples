
const image = document.getElementById('myImage');
image.addEventListener('click', changeImage);

function changeImage() {
    const body = document.body;

    // Check the image source using the 'src' attribute
    if (image.getAttribute('src') === "images/lightOn.png") { // if the image source matches lightOn...
        image.src = "images/lightOff.png"; // ...change image source to lightsOff
        body.style.backgroundColor = "black"; // and change background to black
    } else { // if it doesn't...
        image.src = "images/lightOn.png"; // ...Change image source to lightsOn
        body.style.backgroundColor = "white"; // Change background to white
    }
}
