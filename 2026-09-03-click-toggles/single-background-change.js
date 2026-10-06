
const button = document.getElementById('toggleButton');

button.addEventListener('click', changeBackground);


function changeBackground() {
    const body = document.body;
    body.style.backgroundColor = "black";
}
