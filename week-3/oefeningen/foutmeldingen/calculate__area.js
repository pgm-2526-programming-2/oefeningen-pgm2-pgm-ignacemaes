// Maak een functie genaamd calculateArea die twee parameters, width en height, accepteert.
// Binnen de functie, controleer of width of height kleiner is dan of gelijk aan 0.
// Als een van beide het geval is, gooi dan een nieuwe foutmelding met de boodschap “Ongeldige afmetingen”.
// Anders, retourneer het resultaat van het vermenigvuldigen van width met height.

function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Ongeldige afmetingen");
  }
  return width * height;
}

console.log(calculateArea(5, 3));
console.log(calculateArea(2, 7));
console.log(calculateArea(3, 0));
