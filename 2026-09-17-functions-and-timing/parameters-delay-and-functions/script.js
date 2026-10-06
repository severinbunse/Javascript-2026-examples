// // last week we worked on this example:

// function greetUser(username) {
//     console.log('Hello ' + username);
// }

// greetUser('Severin');


// ------------------------ template literals ------------------------

// // our previous example included a string concatenation.


function faveGame(game) {
    console.log(`My favorite game is ${game}`);
}

faveGame('skyrim');


// function myCar(brand, color) {
//     console.log(`${brand} is ${color}`);
// }

// myCar('Toyota', 'blue');


// ------------------------ setTimeout ------------------------

// // setTimeout(callback, delay);

// function sayHello() {
//     console.log('Hello');
// }

// setTimeout(sayHello, 2000);


// ------------------------ anonymous function ------------------------

// // callback = function used as an argument
// // anonymous function = function without a name

// // now instead of a callback function we use an anonymous function

// setTimeout(function() {
//     console.log('Hello');
// }, 2000);
