// Primitieve datatypes
const name = "Jan";
const age = 20;
const hobbies = ["Gamen", "Youtube kijken"];

// Samensgestelde of reference datatypes
const address = {
  street: "Nieuwstraat",
  number: 13,
};

const interests = hobbies;
console.log(interests);
interests.push("Kitesurfen");
// interests gebrukt een referentie van hobbies, wanneer een variable veranderd gebeurd hetzelfde bij de andere
console.log(interests, hobbies);

let total = 0;
function addFiveToNumber(a = 0) {
  total = a + 5;
  console.log(total);
}

addFiveToNumber(2);
console.log("Totaal: ", total);

function dubbleNumber(number = 0) {
  number = number * 2;
  console.log("Binnen de functie: ", number);
}

function dubbleNumberWithReference(obj) {
  obj.number = obj.number * 2;
  console.log("Binnen de functie: ", obj.number);
}

let originalNumber = 5;
let originalNumberAsReferenceType = {
  number: 5,
};

dubbleNumber(originalNumber);
console.log("Origineel nummer binnen de functie: ", originalNumber);
dubbleNumberWithReference(originalNumberAsReferenceType);
console.log(
  "Origineel nummer binnen de ref-functie: ",
  originalNumberAsReferenceType
);
