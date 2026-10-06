function changeColor(box) {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    box.style.backgroundColor = randomColor;
}


// ------------------------ mouse: the event happens on the box itself ------------------------

const clickBox = document.getElementById('clickBox');
clickBox.addEventListener('click', function() {
    changeColor(clickBox);
});

const dblclickBox = document.getElementById('dblclickBox');
dblclickBox.addEventListener('dblclick', function() {
    changeColor(dblclickBox);
});

const mousedownBox = document.getElementById('mousedownBox');
mousedownBox.addEventListener('mousedown', function() {
    changeColor(mousedownBox);
});

const mouseupBox = document.getElementById('mouseupBox');
mouseupBox.addEventListener('mouseup', function() {
    changeColor(mouseupBox);
});

const mouseoverBox = document.getElementById('mouseoverBox');
mouseoverBox.addEventListener('mouseover', function() {
    changeColor(mouseoverBox);
});

const mouseoutBox = document.getElementById('mouseoutBox');
mouseoutBox.addEventListener('mouseout', function() {
    changeColor(mouseoutBox);
});

const mouseenterBox = document.getElementById('mouseenterBox');
mouseenterBox.addEventListener('mouseenter', function() {
    changeColor(mouseenterBox);
});

const mousemoveBox = document.getElementById('mousemoveBox');
mousemoveBox.addEventListener('mousemove', function() {
    changeColor(mousemoveBox);
});


// ------------------------ keyboard: a div can't receive key presses, so the whole document listens ------------------------

const keydownBox = document.getElementById('keydownBox');
document.addEventListener('keydown', function() {
    changeColor(keydownBox);
});


// ------------------------ inputs: the event happens on the input field ------------------------

const inputBox = document.getElementById('inputBox');
const inputField = document.getElementById('inputField');
inputField.addEventListener('input', function() {
    changeColor(inputBox);
});


// ------------------------ page and window: these happen to the whole page ------------------------

const loadBox = document.getElementById('loadBox');
window.addEventListener('load', function() {
    changeColor(loadBox);
});

const resizeBox = document.getElementById('resizeBox');
window.addEventListener('resize', function() {
    changeColor(resizeBox);
});

const scrollBox = document.getElementById('scrollBox');
window.addEventListener('scroll', function() {
    changeColor(scrollBox);
});
