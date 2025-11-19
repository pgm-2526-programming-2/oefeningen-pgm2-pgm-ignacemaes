// De verschillende manieren om een functie te schrijven
// function myFunction() {}
// const myFunction = () => {};
// const myFunction = function () {};

const name = "Ignace";
const age = 19;
const students = ["Tim", "Bart", "Bob", "Yonas", "Geert"];

function logSum(a, b) {
  return a + b;
}

const multiplier = function () {};

console.log(name);
console.log(logSum(age, 12));
console.log(division(age, 2));

// Kleine oefening, random student
function selectRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(selectRandomItem(students));

function showMessage(message) {
  console.log("Answer Checker Message:", message);
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback("true");
    return true;
  }
  // Geen else nodig want, indien waar stopt de functie :)
  callback("false");
  return false;
}

checkAnswer("ja", "nee", showMessage);

// multiply, division
// showCalculation, 3 parameters: 2 getallen en een van de bovenstaande functies
// showCalculation print uitkomst in onze terminal => console.log gebruiken
// sum and minus zijn gemaakt voor plezier

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function showCalculation(number1 = 0, number2 = 0, calculation = sum) {
  console.log(calculation(number1, number2));
}

showCalculation(6, 2, sum);
showCalculation(6, 2, minus);
showCalculation(6, 2, multiply);
showCalculation(6, 2, division);
showCalculation(6, 2);
showCalculation();
