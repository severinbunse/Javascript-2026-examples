// ------------------------ console.log & alert ------------------------

// console.log('Hello World!');

// alert('Hello World!');

// console.log(document);

// document.body.style.backgroundColor = 'red';


// ------------------------ conditionals ------------------------

// const temperature = 70;

// if (temperature < 60) {
//     document.body.style.backgroundColor = 'blue';
//     console.log('it is cold');
// } else {
//     document.body.style.backgroundColor = 'red';
//     console.log('it is warm in here');
// }


// const temperature = 25;

// if (temperature >= 85) {
//     document.body.style.backgroundColor = 'red';
//     console.log('it is hot');
// } else if (temperature <= 32) {
//     document.body.style.backgroundColor = 'blue';
//     console.log('it is freezing');
// } else {
//     document.body.style.backgroundColor = 'orange';
//     console.log('it is mild');
// }


// const temperature = 95;
// const isSunny = true;

// if (temperature <= 85 && isSunny) {
//     document.body.style.backgroundColor = 'yellow';
//     console.log('love the weather');
// } else {
//     document.body.style.backgroundColor = 'red';
//     console.log('Ugh, it is too hot');
// }


// const isSunny = true;
// const isSnowy = true;
// const paragraph = document.getElementById('myParagraph');

// if (isSunny || isSnowy) {
//     paragraph.textContent = 'Love the weather!';
//     console.log('the weather is great!');
// }


// const isLoggedIn = false;
// const paragraph = document.getElementById('myParagraph');

// if (!isLoggedIn) {
//     paragraph.textContent = 'You are not logged in';
//     console.log('Please log in to continue!');
// }


// ------------------------ loops ------------------------

// let count = 1;

// while (count < 10) {
//     console.log(count);
//     count = count + 1;
// }

// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }


// let username = '';

// while (username === '') {
//     username = window.prompt('Enter your name');
// }

// console.log('Hello ' + username);


// ------------------------ functions ------------------------

// function greet() {
//     console.log('Hello World');
// }

// greet();


// function greetUser(username) {
//     console.log('Hello ' + username);
// }

// greetUser('Severin');


// function addPrices(a, b) {
//     return a + b;
// }

// const result = addPrices(6, 7);
// console.log('Total: $' + result);


// ------------------------ arrays & objects ------------------------

// const fruit = ['apple', 'banana', 'orange'];
// console.log(fruit[2]);


// const basket = ['apple', 'banana', 'orange'];

// function addFruit(fruit) {
//     basket.push(fruit);
// }

// addFruit('cherry');
// addFruit('Kiwi');
// console.log(basket);


// const user = { name: 'Toasty', age: '5', isStudent: true };

// console.log(user.name);
// console.log(user.age);


// const pencilCase = ['red', 'blue', 'green', 'yellow'];

// for (let i = 0; i < pencilCase.length; i++) {
//     pickColor(pencilCase[i]);
// }

// function pickColor(color) {
//     console.log('I pick ' + color);
// }


// ------------------------ changing the page ------------------------

// const paragraph = document.getElementById('myParagraph');

// function changeParagraph() {
//     paragraph.textContent = 'This is our updated paragraph';
// }

// changeParagraph();

// // now we change its CSS

// function changeTextColorAndSize() {
//     paragraph.style.color = 'red';
//     paragraph.style.fontSize = '50px';
//     paragraph.style.lineHeight = '0.8';
// }

// changeTextColorAndSize();

// // now we change the background color

// const background = document.body;

// function changeBackgroundColor() {
//     background.style.backgroundColor = 'pink';
// }

// changeBackgroundColor();


// const background = document.body;

// function changeBackgroundColor() {
//     document.body.style.backgroundColor = 'blue';
// }

// document.addEventListener('click', changeBackgroundColor);


// ------------------------ background colors with setTimeout ------------------------

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (let i = 0; i < colors.length; i = i + 1) {
    setTimeout(function() {
        document.body.style.backgroundColor = colors[i];
    }, i * 1000);
}
