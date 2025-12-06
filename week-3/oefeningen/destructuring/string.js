const sentence = "This is a sentence.";
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
const [firstLetter, ...restOfSentence] = sentence.split("");

console.log(firstLetter, restOfSentence.join("")); // Output: T his is a sentence.
