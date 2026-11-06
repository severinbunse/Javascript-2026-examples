const eyes = document.querySelectorAll('.eye'); // returns a list of every .eye on the page, not a single element

// (event) => { ... } is an arrow function, a shorter way to write function(event) { ... }
document.addEventListener('mousemove', (event) => {
    // forEach runs the function once for each eye, so each eye works out its own direction
    eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil');

        // same as the shy button: find this eye's center
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // how far the mouse is from the center, across and down
        const distanceX = event.clientX - eyeX;
        const distanceY = event.clientY - eyeY;

        // same as the shy button: the straight-line distance between the mouse and the center.
        // distanceX and distanceY are two sides of a right triangle; Math.hypot uses Pythagoras to find the third, longest side (the hypotenuse).
        const distance = Math.hypot(distanceX, distanceY);

        // distanceX / distance is the direction as a fraction from -1 to 1
        // e.g. mouse straight to the right: distanceX / distance = 1 and distanceY / distance = 0
        // times 50 moves the pupil 50px in that direction
        const pupilX = distanceX / distance * 50;
        const pupilY = distanceY / distance * 50;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
