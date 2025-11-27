const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];

woorden.join(" - ");
console.log(woorden);

const wordStartsWithB = woorden.some((woord) => woord.charAt(0) === "b");
console.log(wordStartsWithB);

woorden.unshift("Hallo");
console.log(woorden);

const wordLongerThanTwo = woorden.every((woord) => woord.length > 2);
console.log(wordLongerThanTwo);

woorden.sort();
console.log(woorden);

console.log(woorden[2]);

const filterOutWords = woorden.filter((woord) => woord.length <= 4);
console.log(filterOutWords);
