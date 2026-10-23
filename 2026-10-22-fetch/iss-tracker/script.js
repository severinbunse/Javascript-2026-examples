// ------------------------ code that waits (console only) ------------------------

// console.log('1: before');

// setTimeout(() => {
//     console.log('2: inside the timeout');
// }, 2000);

// console.log('3: after'); // prints before 2: JavaScript doesn't wait for setTimeout

// const result = fetch('https://api.wheretheiss.at/v1/satellites/25544');
// console.log(result); // Promise {<pending>}: not the data, a value that arrives later


// ------------------------ fetch with async / await (console only) ------------------------
// // Pending means the request is still on its way. console.log ran right after fetch sent the request, the same way '3: after' printed before the timeout. If we want the actual data, we have to tell JavaScript to wait for the answer. That's what await does. And await only works inside a function marked async.


// async function findISS() { // await only works inside an async function: only this function waits, the rest of the page keeps running
//     const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544'); // waits until the server has answered. What you get is a Response: it tells you how the request went (the status, like 200) and that data came back. But the data is still raw text and hasn't been read yet.
//     const data = await response.json(); // read the data and turn the JSON text into a JavaScript object. Reading takes a moment too, so it needs its own await.

//     console.log(data);           // the whole object
//     console.log(data.latitude);  // -90 (south pole) to 90 (north pole)
//     console.log(data.longitude); // -180 (west) to 180 (east)
// }

// findISS();


// ------------------------ keep it up to date ------------------------
// // Shows the station's position on the page, then fetches it again every 2 seconds, so the numbers change as the ISS moves.

// // edit html to make this work (add the latitude and longitude paragraphs)


// const latitude = document.querySelector('#latitude');
// const longitude = document.querySelector('#longitude');

// async function findISS() {
//     const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
//     const data = await response.json();

//     latitude.textContent = `Latitude ${data.latitude}`;
//     longitude.textContent = `Longitude ${data.longitude}`;
// }

// findISS(); // right away. Without the separate call, the page would be empty for the first 2 seconds.
// setInterval(findISS, 2000); // then again every 2 seconds (in milliseconds). setInterval runs a function over and over, with a fixed pause between runs. Similar to setTimeout.


// ------------------------ move with the station ------------------------
// // The longitude moves the text across the screen:
// // west (-180) is the left edge, east (180) is the right edge.
// // Going once across the screen takes about an hour and a half.

// const info = document.querySelector('#info');
// const latitude = document.querySelector('#latitude');
// const longitude = document.querySelector('#longitude');

// async function findISS() {
//     const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
//     const data = await response.json();

//     latitude.textContent = `Latitude ${data.latitude}`;
//     longitude.textContent = `Longitude ${data.longitude}`;

//     // longitude -180 to 180 becomes 0% to 100% across the screen:
//     // + 180  moves the range to 0 to 360, so the far west (-180) becomes 0, the left edge
//     // / 360  turns it into a fraction of the whole width, 0 to 1
//     // * 100  turns the fraction into a percentage for left
//     const left = (data.longitude + 180) / 360 * 100;
//     info.style.left = `${left}%`;
// }

// findISS(); // right away
// setInterval(findISS, 2000); // then again every 2 seconds (in milliseconds)


// ------------------------ which country is it above? ------------------------
// Same plus a second endpoint of the same API: send it a latitude and longitude, get back the country code there.
// Two requests per update now, so every 5 seconds instead of 2 (the API allows about 1 request per second).

const info = document.querySelector('#info');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const country = document.querySelector('#country');

async function findISS() {
    // 1. where is the ISS?
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();

    latitude.textContent = `Latitude ${data.latitude}`;
    longitude.textContent = `Longitude ${data.longitude}`;

    const left = (data.longitude + 180) / 360 * 100;
    info.style.left = `${left}%`;

    // 2. what's at that latitude and longitude? This request needs the answer from the first one. The people who run the API added the second endpoint as a helper, because "where is the ISS?" leads naturally to "and what's down there?" But they built it as a general question rather than adding the country to the ISS's answer, so it works for any latitude and longitude.

    const placeResponse = await fetch(`https://api.wheretheiss.at/v1/coordinates/${data.latitude},${data.longitude}`);
    const place = await placeResponse.json();

    // a two-letter country code, e.g. 'BR' for Brazil. Over the ocean there is no country, and the code is '??'
    if (place.country_code === '??') {
        country.textContent = 'Above the ocean';
    } else {
        country.textContent = `Above ${place.country_code}`;
        // const code = place.country_code;
        // const flag = String.fromCodePoint(127397 + code.charCodeAt(0), 127397 + code.charCodeAt(1)); // 'BR' becomes 🇧🇷
        // country.textContent = `Above ${flag} ${code}`;
    }
}

findISS(); // right away
setInterval(findISS, 5000); // then again every 5 seconds (in milliseconds)
