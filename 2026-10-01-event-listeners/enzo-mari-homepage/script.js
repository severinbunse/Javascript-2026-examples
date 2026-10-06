// images come from https://enzomari.com, we link to their files instead of downloading them
const images = [
    'https://enzomari.com/content/1-images/0001.jpg', // Il Gioco delle Favole, 1957
    'https://enzomari.com/content/1-images/019.jpg', // Putrelle, 1958
    'https://enzomari.com/content/1-images/0004.jpeg', // Cubo, 1959
    'https://enzomari.com/content/1-images/028.jpg', // Scatole, 1960
    'https://enzomari.com/content/1-images/021.jpg', // Vassoio Rettangolare, 1961
    'https://enzomari.com/content/1-images/038.jpg', // Il posto dei giochi, 1961
    'https://enzomari.com/content/1-images/027.jpg', // Tagliacarte Elicoidale, 1962
    'https://enzomari.com/content/1-images/041.jpg', // Vaso da fiori doppio, 1968
    'https://enzomari.com/content/1-images/scan-001.jpeg', // Caraffa Tribolata in Vetro, 1969
    'https://enzomari.com/content/1-images/00011.jpg', // Kurili, 1970
    'https://enzomari.com/content/1-images/043.jpg', // Sedia in plastica, 1971
    'https://enzomari.com/content/1-images/00018.jpg', // Day-night, 1971
    'https://enzomari.com/content/1-images/00010.jpg', // Dulband, 1973
    'https://enzomari.com/content/1-images/0006.jpeg', // Samos Model S, 1973
    'https://enzomari.com/content/1-images/scan-002.jpeg', // 16 Pesci, 1973
    'https://enzomari.com/content/1-images/046.jpg', // Tavolo Frate, 1973
    'https://enzomari.com/content/1-images/00015.jpg', // Aggregato, 1974
    'https://enzomari.com/content/1-images/00019.jpeg', // Cugino, 1975
    'https://enzomari.com/content/1-images/0007.jpeg', // Zani & Zani, 1987
    'https://enzomari.com/content/1-images/00013.jpg' // Guardare un Fotografo, 2000
];


function addImage(ourSource, ourWidth) {
    const image = document.createElement('img');
    image.src = ourSource;
    image.style.width = `${ourWidth}px`;
    document.body.prepend(image); // new: prepend adds the image at the beginning of the body, appendChild adds it at the end
}


function addRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length); // new: Math.floor rounds down to a whole number, because an array only has positions like 7 or 8, not 7.742 (that would give us undefined and a broken image)
    const randomWidth = Math.random() * 450 + 50;

    addImage(images[randomIndex], randomWidth);
}


addRandomImage(); // call the function once right away, so the page starts with one image

document.body.addEventListener('click', addRandomImage); // new: every click on the body adds another image
