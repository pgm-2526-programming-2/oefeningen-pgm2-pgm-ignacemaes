// Ophalen van waarden uit een array en die opslaan in een variable
const persoon = ["Adriaan", "Gilbert"];
const voornaam = persoon[0];
const achternaam = persoon[1];

// Destructuring => maken van variablen bij de declaratie van een array
// Door aan de linkerzijde vierkantje haakjes gebruiken weten we dat de waarde uit een array gaan destructuren
const [firstN, lastN] = persoon;

const results = ["Ignace", "Arif", "Kobe", "Justin"];
const [firstWinner] = results; // Je kan elenenten overslaan
console.log(firstWinner);

const songs = [
  {
    name: "Ophellia",
    artist: "Taylor Swift",
  },
  {
    name: "Still DRE",
    artist: "Snoop Dogg",
  },
];

const [firstTrack, lastTrack] = songs;
console.log(firstTrack.name, lastTrack.name);

// Combinatie rest operator and destructuring
const anotherArray = [];
// Doel een array opsplitsen in eerste element en de rest
// PC crash
