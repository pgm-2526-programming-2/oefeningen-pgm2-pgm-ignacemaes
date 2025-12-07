// Maak een functie genaamd divideNumbers die twee parameters, num1 en num2, accepteert.
// Binnen de functie, controleer of num2 gelijk is aan 0.
// Als dat het geval is, gooi dan een nieuwe foutmelding met de boodschap “Kan niet door nul delen”.
// Anders, retourneer het resultaat van de deling van num1 door num2.
function devideNumbers(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    throw new Error("Kan niet door nul delen");
  }
  return num1 / num2;
}

console.log(devideNumbers(15, 5));
console.log(devideNumbers(7, 2));
console.log(devideNumbers(0, 1));
