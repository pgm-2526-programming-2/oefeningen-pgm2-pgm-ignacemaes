// const myVideoGames = [
//   "Super Mario Bros",
//   "Kirby's Adventure",
//   "Metroid",
//   "The Legend of Zelda",
//   "Ducktales",
//   "Mega Man",
//   "Kid Icarus",
//   "Donkey Kong",
// ];

// const myFavoriteGames = [
//   {
//     name: "Super Mario Bros",
//     releaseYear: 1985,
//   },
//   {
//     name: "Kirby's Adventure",
//     releaseYear: 1993,
//   },
// ];

// const amountFavoriteGames = myFavoriteGames.length;
// console.log(amountFavoriteGames);

// const newGames = new Array();

// Array.isArray(myVideoGames); // true

// // const secondGame = myVideoGames[1];
// // console.log(secondGame);

// const altSecondGame = myVideoGames.at(1);
// console.log(altSecondGame);

// const lastGame = myVideoGames.at(-1);
// console.log(lastGame);

// const values = [
//   "Bonzo",
//   function () {
//     console.log("Hallo");
//   },
// ];

// myVideoGames.length = 3;
// const topThree = myVideoGames;
// console.log(topThree);

// // myVideoGames.length = 5;
// // const topFive = myVideoGames;
// // console.log(topFive);

// const stringArray = "[1, 2, 3, 4]";
// const numbers = JSON.parse(stringArray);
// console.log(typeof stringArray, typeof numbers);

// // stringArray.push(5);
// numbers.push(5);
// console.log(numbers);

// numbers.pop(5);
// console.log(numbers);

// const numberString = JSON.stringify(numbers);
// console.log(numberString);

// const students = ["Nick", "Mert", "Jens"];
// const people = ["Nick", "Mert", "Jens"];

// console.log(students === people);

// function areArrayEqual(array1, array2) {
//   const string1 = JSON.stringify(array1);
//   const string2 = JSON.stringify(array2);

//   if (string1 === string2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// areArrayEqual(students, people);

// Hetzelfde maar veel beperkter
// const areArrayEqual = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   return JSON.stringify(array1) === JSON.stringify(array2);
// };

// console.log(areArrayEqual(students, people));

// const matrix = [
//   ["0", "0", "0", "0"],
//   ["0", "x", "0", "0"],
//   ["0", "0", "0", "0"],
//   ["0", "0", "0", "0"],
// ];

// console.log(matrix[1][1]);

// for (const array of matrix) {
//   console.log(array);
// }

// const colors = ["red", "blue", "green"];

// colors.push("yellow");
// console.log(colors);

// colors.unshift("Begin van array");
// console.log(colors);

// colors.pop();
// console.log(colors);

// colors.shift();
// console.log(colors);

// const numbers = [1, 2, 3, 4, 5];
// console.log("Numbers:", numbers);

// const doubleNumbers = numbers.map((value, index) => {
//   if (value === 2) {
//     return value;
//   }

//   return value * 2;
// });

// console.log("Double numbers:", doubleNumbers);
// console.log("Double numbers as string:", doubleNumbers.join(", "));

// const numbersWithoutEight = doubleNumbers.filter((value) => {
//   return value !== 8;
// });

// console.log(numbersWithoutEight);

// numbers.some((number) => number === 8);
// numbers.every((number) => number === 8);

// //Reduce value
// //van een array naar 1 getal te gaan
// const sales = [4, 10, 6];
// sales.reduce((previousValue, currentvalue) => {
//   return previousValue + currentvalue;
// });

// Loop 1: 0 + 4 -> 4
// Loop 2: 4 + 10 -> 14
// Loop 3: 14 + 6 -> 20

const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 35 },
];

const totalProductsPrice = products.reduce(
  (previousReturnedPrice, productObject) => {
    return previousReturnedPrice + productObject.price;
  },
  0
);

console.log(totalProductsPrice);

const objectMap = {};
