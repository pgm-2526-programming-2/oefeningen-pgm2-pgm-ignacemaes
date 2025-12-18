const path = require("path");
const crypto = require("crypto");
const { getContentFromFile } = require("../utils/files.utils");
const fs = require("fs/promises");
const locationBlueprint = require("../validation/locations.validation");
const locationFile = path.join(__dirname, "..", "models", "locations.json");

function getLocations(req, res) {
  console.log("Get locations!");
  res.send("De server haalt data op :)");
}

async function addLocation(req, res) {
  // Valideer de doorgestuurde locatie
  const { error } = locationBlueprint.validate(req.body);

  if (error) {
    res.status(400);
    return res.json({
      message: error.details[0].message,
    });
  }

  const locations = await getContentFromFile("locations.json");
  const updatedBody = { ...req.body, id: crypto.randomUUID() };
  locations.push(updatedBody);

  await fs.writeFile(locationFile, JSON.stringify(locations, null, 2), "utf8");

  console.log("post new location!", req.body, locations);
  res.status(201);
  res.send("De server voegt data toe :)");
}

module.exports = { getLocations, addLocation };
