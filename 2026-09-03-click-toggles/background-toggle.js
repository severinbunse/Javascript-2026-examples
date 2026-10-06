
const button = document.getElementById('toggleButton');


button.addEventListener('click', toggleBackground);


function toggleBackground() {


    const body = document.body;


    if (body.style.backgroundColor === "black") { 
        body.style.backgroundColor = "white"; 
    } else { 
        body.style.backgroundColor = "black"; 
    }

}
