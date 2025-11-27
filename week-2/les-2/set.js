// Handig voor de eindopdracht
// Set = collectie van element die enkel unieke waarden heeft.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uniqueNumbers = new Set(numbers);

console.log(
  uniqueNumbers,
  uniqueNumbers.size,
  uniqueNumbers.add(10),
  uniqueNumbers.has(6),
  uniqueNumbers.delete(10)
);

for (const number of uniqueNumbers) {
  console.log(number);
}

// Objecten zijn altijd uniek, ongeacht of ze dezelfde waarden hebben. Hun referentie is altijd anders
const mixedSet = new Set([1, 2, 3, { id: 0 }, 4, 5, 6, { id: 0 }]);
console.log(mixedSet);
