const persoon = {
  firstN: "Ignace",
  lastN: "Maes",
  age: 30,
};

// const firstN = persoon.firstN; // Variable naam = key name => destructureren
// const { firstN, lastN, age } = persoon;
// console.log(firstN, lastN, age);

// Verschil tussen object en array, object is op basis van een key en niet een index. De volgorde maakt niet uit.
const { firstN, age, lastN, gender = "male" } = persoon;
console.log(firstN, lastN, age, gender);
// Nadeel van object structuring, de variable heeft dezelfde naam als het object

const options = {
  c: 200000,
  w: 2500,
  m: "C8",
  b: undefined,
};

const { c: cost, w: weight, m: model, b: brand = "Citroën" } = options;
console.log(cost, weight, model, brand);

const { w: altWeight, ...rest } = options;
console.log(altWeight, rest);

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

const [firstTrack, { name: songName, artist: artistName }] = songs;
console.log(firstTrack.name, songName);

const song = {
  name: "flowers",
  artist: "Miley",
};

const info = {
  name: "7 things",
};

function editSong(song, { name }) {
  song.name = name;
}
editSong(song);
