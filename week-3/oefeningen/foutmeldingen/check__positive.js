// Opgave
function checkPositive(value) {
  // TODO: Implementeer de functie
  if (value < 0) {
    throw new RangeError("Waarde moet groter zijn dan nul.");
  }
  return `Gegeven waarde is: ${value}`;
}

console.log(checkPositive(5));
console.log(checkPositive(0));
console.log(checkPositive(-5));
