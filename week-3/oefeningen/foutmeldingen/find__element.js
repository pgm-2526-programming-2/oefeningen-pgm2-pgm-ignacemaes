// Maak een functie genaamd findElement die een array arr en een waarde element accepteert.
// Binnen de functie, controleer of arr een array is.
// Als dat niet het geval is, gooi dan een nieuwe TypeError met de boodschap “Ongeldige invoer: arr moet een array zijn”.
// Controleer vervolgens of element aanwezig is in de array. Als dat het geval is, retourneer dan de index van het element.
// Als dat niet het geval is, gooi dan een nieuwe foutmelding met de boodschap “Element niet gevonden”.
const students = ["Pieter", "Jan", "Bert"];
const name = "Meert";

function findElement(arr, element) {
  if (Array.isArray(arr)) {
    if (arr.includes(element)) {
      return `Array bevat: ${element}`;
    }
    throw new Error("Element niet gevonden");
  }
  throw new TypeError("Ongeldige invoer: arr moet een array zijn");
}

console.log(findElement(students, "Jan"));
// console.log(findElement(students, "Meert"));
console.log(findElement(name, "Pieter"));
