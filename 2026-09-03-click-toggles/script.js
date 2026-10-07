// Listen for clicks anywhere on the page. We use "document" here rather
// than "document.body" — the body element itself has no content, so its
// clickable area would only be a few pixels tall. "document" catches a
// click no matter where on the page it happens.
document.addEventListener('click', toggleBackground);

// This is the function that runs every time the page is clicked.
// Defining it with the "function" keyword and a name makes it reusable
// and lets us refer to it by name above.
function toggleBackground() {

    // Our one and only variable: a reference to the page's <body>
    // element, so we can read from and write to its background color.
    const body = document.body;

    // Check the current background color
    // Ask: is the body's background color currently "black"?
    // === compares the value exactly, without converting types.
    if (body.style.backgroundColor === "black") { // if it's already black...
        body.style.backgroundColor = "white"; // ...change it to white
    } else { // otherwise (it's white, or not set yet)...
        body.style.backgroundColor = "black"; // ...change it to black
    }
    // Only one of the two lines above runs each time the function is
    // called — that's what makes this a toggle, flipping back and forth.
}
