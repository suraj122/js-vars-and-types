// Challenge 1.
// Log message in console saying "I'm Learning Javascript"

console.log("I'm Learning JavaScript.");

// Challenge 2.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let admin;
let name = "John";
admin = name;
alert(admin);

// Challenge 3.
// Use alert function to to show a message saying “Hello World”.

alert("Hello world");

// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"
let person = prompt("What is your name?", "");
alert(`Welcome ${person}`);

// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

let str = prompt("Writ something", "");
console.log(str.length);

// Challenge 6.
var city = "Dharamshala";
var country = "India";
// Alert the above variable like "Dharamshala, India";
alert(`${city}, ${country}`);
