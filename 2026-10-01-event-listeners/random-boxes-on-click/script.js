// Last week, a for loop called addBox() 300 times and passed in values it knew, like boxIndex for the rotation and delay.
// That's why addBox() needed parameters, and why the loop sat outside of the function.
// Now the click listener does the repeating instead of the loop, and all our values are random,
// so nothing has to be passed in from outside. Everything can go in one function that makes one box per click.

function addBox() {
    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 150 + 100;
    const randomRotation = Math.random() * 360;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const randomBorderRadius = Math.random() * 100;

    const box = document.createElement('div');
    box.style.width = `${randomWidth}px`;
    box.style.height = `${randomHeight}px`;
    box.style.backgroundColor = randomColor;
    box.style.transform = `rotate(${randomRotation}deg)`;

    if (randomRotation > 180) {
        box.style.borderRadius = `${randomBorderRadius}%`;
    }

    document.body.prepend(box);
}

document.addEventListener('click', addBox);
