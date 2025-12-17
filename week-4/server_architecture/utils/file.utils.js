// Initialize requires
const fs = require("fs");
const path = require("path");

// Define functions
function getData(file) {
  try {
    const filePath = path.join(__dirname, "..", "models", file);
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error(error);
  }
}

function writeData(file, data) {
  try {
    const filePath = path.join(__dirname, "..", "models", file);
    const content = fs.writeFileSync(filePath, data);
    return JSON.parse(content);
  } catch (error) {
    console.error(error);
  }
}

// Export functions
module.exports = { getData, writeData };
