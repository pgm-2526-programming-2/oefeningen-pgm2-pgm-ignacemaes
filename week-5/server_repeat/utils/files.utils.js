// Initialize requires
const fs = require("fs/promises");
const path = require("path");

// Define functions
async function getContentFromFile(fileName = "locations.json") {
  const filePath = path.join(__dirname, "..", "models", fileName);
  const fileContentAsString = await fs.readFile(filePath, "utf8");
  const fileContentAsValidJS = JSON.parse(fileContentAsString);
  return fileContentAsValidJS;
}

function writeContentToFile(file, data) {}

// Export functions
module.exports = { getContentFromFile, writeContentToFile };
