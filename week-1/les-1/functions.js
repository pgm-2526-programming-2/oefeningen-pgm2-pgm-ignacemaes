// De verschillende manieren om een functie te schrijven
// function myFunction() {}
// const myFunction = () => {};
// const myFunction = function () {};

const name = "Ignace";
const age = 19;
const students = ["Tim", "Bart", "Bob"];

function logSum(a, b) {
  return a + b;
}

const division = (a, b) => {
  return a / b;
};

const multiplier = function () {};

console.log(name);
console.log(logSum(age, 12));
console.log(division(age, 2));

// Kleine oefening, random student
function selectRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(selectRandomItem(students));
