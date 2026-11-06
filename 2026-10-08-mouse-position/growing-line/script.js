function addLine(event) {
    // clientX/clientY are where the mouse was clicked, in pixels from the top-left corner of the window
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const line = document.createElement('div');
    line.style.width = '2px';
    line.style.height = '0px'; // starts with no height, so you can't see it yet
    line.style.backgroundColor = 'green';
    line.style.position = 'absolute';
    line.style.left = `${mouseX}px`;

    // We place the line by its bottom edge, not its top, so it grows upward from the click.
    // bottom is measured from the bottom of the window, so we subtract mouseY from the window's height.
    line.style.bottom = `${window.innerHeight - mouseY}px`;

    // transition animates any change to the height over 2 seconds
    line.style.transition = 'height 2s';

    document.body.append(line);

    // Wait 10 milliseconds before changing the height. If we changed it right away, the browser would never draw
    // the line at 0px, so there'd be nothing to animate from and the line would just appear at full height.
    setTimeout(function() {
        line.style.height = '250px';
    }, 10);
}

document.addEventListener('click', addLine);
