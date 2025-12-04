// //.env bestand bevat geheime instellingen dit in het project staan maar niet op github
// const process = require("process"); // Module die info geeft over huidige node time
// console.log(process); // Alle informatie
// console.log(process.env); // Alle info over het environment

const path = require("path");
// Belangerijk voor de paden op onze server te beschrijven,
// het is platform onafhankelijk (/ vs \), het is robuster want het kan omgaan met speciale tekens (spaties),
// toekomstgericht want noest er een nieuw operating system komen moet de code niet geupdate worden
// const studentsPath = "./students.json"; // Mac versie, niet goed want moet platform onafhankelijk zijn
const studentsPath = path.join(__dirname, "students.json");
console.log(studentsPath);
// const pathToFUnctionsCourse = "../../week-1/les-1/functions.js";
const pathToFUnctionsCourse = path.join(
  "..",
  "..",
  "week-1",
  "les-1",
  "functions.js"
);
console.log(__dirname);

const fileSystemModule = require("fs"); // File system module zorgt ervoor dat we met bwestanden kunnen werken op ons systeem van onze server.
const fileSync = fileSystemModule.readFileSync(studentsPath, "utf8");
const fileContentAsArray = JSON.parse(fileSync);
fileContentAsArray.push({
  name: "Yens",
  age: 19,
});
console.log(fileSync);

fileSystemModule.writeFileSync(
  studentsPath,
  JSON.stringify(fileContentAsArray)
);

/* Requires altijd bovenaan schrijven */
