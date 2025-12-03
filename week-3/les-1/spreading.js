// Operators
// >, <, ===, !===
// Spread and rest operator => allebij drie puntjes "..."
// Spread = uitspreiden van bepaalde waarden.
const numbers = [1, 2, 3];
console.log(numbers, ...numbers);

// Waarom?
// 1. Kopie maken van een referentie datatype
const students = ["Mert", "Jens"]; // Past oorspronkelijke aan
students.push("Jan");
const friends = students; // Past oorspronkelijke aan
const people = [students]; // Past oorspronkelijke aan

const newcomers = [...students]; // Nieuwe referentie dus geen aanpassingen meer
students.push("Maarten");
console.log(students, friends, people, newcomers);

// 2. Om arrays saamen te voegen
const apero = ["pintje", "gin", "cocktail"];
const snacks = ["frikandel", "chips", "kaasblokjes"];
const menu = [...apero, ...snacks];
console.log(menu);

// 3. Dit werkt allemaal met objecten
const car = {
  brand: "Citroen",
  model: "C8",
  year: 2011,
};

const upgrades = {
  spoiler: true,
  extra: ["GPS", "Custom uitlaat"],
};

const ugradedCar = { ...car, ...upgrades };
console.log(ugradedCar);

// Object key advanced syntax
const a = "Hello";
const test = {
  a,
};

console.log(test); // { a: 'Hello'} want a is binnen test als de variable a boven ons object
