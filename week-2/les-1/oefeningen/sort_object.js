let objectenArray = [
  { naam: "Anna", leeftijd: 30 },
  { naam: "Charlie", leeftijd: 35 },
  { naam: "Bob", leeftijd: 25 },
];

function sorterenOpEigenschap(objecten, eigenschap) {
  return objecten.sort();
}

let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, "naam");
console.log(gesorteerdOpNaam);
