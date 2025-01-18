// MyFunction for alert
function MyFunction() {
  alert("I AM AN ALERT BOX");
}

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Destructuring Assignment
let { firstName, age } = person;

// Display Data
document.getElementById("demo").innerHTML = firstName + " is " + age + " years old.";
