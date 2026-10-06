
const image = document.getElementById('myImage');
image.addEventListener('click', changeImage);

function changeImage() {
    const body = document.body;

    
    if (image.getAttribute('src') === "images/lightOn.png") { 
        image.src = "images/lightOff.png"; 
        body.style.backgroundColor = "black"; 
    } else { 
        image.src = "images/lightOn.png"; 
        body.style.backgroundColor = "white"; 
    }
}
