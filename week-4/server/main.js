const express = require("express");
var bodyParser = require("body-parser");
const myServer = express();
const fs = require("fs");
const path = require("path");

myServer.use(bodyParser.urlencoded({ extended: false }));
myServer.use(bodyParser.json());

const PORT = 3000;
const HOST = "localhost";

function getCurrentTime() {
  const now = new Date();
  return `${now.getUTCHours() + 1}:${now.getUTCMinutes()}`;
}

function getContentFromFile(fileNameAndExtension) {
  const fileContentToString = fs.readFileSync(path.join(__dirname, fileNameAndExtension), "utf8");
  return JSON.parse(fileContentToString);
}

myServer.get("/api", (request, response) => {
  console.log("Verzoek op de server!");
  response.status(200);
  // response.send(`De tijd op de server is: ${getCurrentTime()}`);
  response.json({
    name: "API Test!",
    requestTime: getCurrentTime(),
  });
});

// Maak een /api/recipes endpoint! Geef hier alle recepten terug!
myServer.get("/api/recipes", (request, response) => {
  //   console.log("Verzoek op de server");
  //   response.status(200);
  response.json(getContentFromFile("recipes.json"));
});

myServer.listen(PORT, HOST, () => {
  console.log(`Server staat aan op http://${HOST}:${PORT}!`); // Afsluiten door Ctrl + C
});

console.log("Server bestand!");
