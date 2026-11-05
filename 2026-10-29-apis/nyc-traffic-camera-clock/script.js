// ------------------------ why we saved a copy of the data ------------------------
// The city's server sends JSON, but it doesn't include the header (Access-Control-Allow-Origin) that lets other websites read it with fetch. That's why we saved a copy as cameras.json. (When saving the page, set Format to Page Source.)


// ------------------------ why we need Live Server ------------------------
// fetch is meant for getting things from a web server. When you double-click index.html, there's no server, just a file on your computer, so the browser refuses to fetch cameras.json. Live Server runs a small web server on your own computer, so your page behaves like a real website.

// Why browsers are this strict: if file:// pages could read nearby files, any HTML file you downloaded and double-clicked (an email attachment, say) could read the other files in your Downloads folder and send them to someone. Blocking it protects you.


// ------------------------ camera clock ------------------------

const time = document.querySelector('#time');
const place = document.querySelector('#place');
const image = document.querySelector('#image');

let cameraList; // all cameras, filled in by start()
let camera;     // the camera we are looking at
// Declaring them at the top means all functions can reach them. Each of them is shared by more than one function.

// pick a random camera from the list
function nextCamera() {
    camera = cameraList[Math.floor(Math.random() * cameraList.length)]; // Math.floor rounds down
}

// update the time, the place name and the camera image
// ?nocache= makes the URL different each time, so the browser loads a new picture
function updatePage() {
    time.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }); // "make a new Date object", toLocaleTimeString() takes a Date and turns just its time into readable text, formatted for a particular place. New York time, because that's where the cameras are. Asia/Tokyo
    place.textContent = camera.name;
    image.src = `${camera.imageUrl}?nocache=${Math.random()}`; // Everything after ? is a query string, extra information attached to an address. The city's server ignores nocache and sends the current picture no matter what. Only the browser cares about it, because it makes the address look new (cache). The name nocache is arbitrary (t or x would work too). what matters is that the value changes every time, and Math.random() takes care of that.
}

// load the camera list, then start the clock
// cameras.json is a saved copy of https://webcams.nyctmc.org/api/cameras
async function start() {
    const response = await fetch('cameras.json');
    cameraList = await response.json();

      // keep only the cameras in Manhattan
    // cameraList = cameraList.filter(cam => cam.area === 'Manhattan');


    nextCamera();
    updatePage();
    setInterval(updatePage, 1000);
    setInterval(nextCamera, 5000);
}

start();
