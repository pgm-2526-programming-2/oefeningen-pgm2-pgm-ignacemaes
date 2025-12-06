const { generateRandomData } = require("./data.js");
const { processData, calculateImportanceCount, calculateComplexityCount } = require("./processing.js");
const { showProcessedData, showImportanceScore, showComplexitySummary } = require("./reporting.js");

const randomData = generateRandomData();
const processedData = processData(randomData);
showProcessedData(processedData);

const { highImportanceCount, lowImportanceCount } = calculateImportanceCount(processedData);
showImportanceScore(highImportanceCount, lowImportanceCount, processedData);
const { highComplexityCount, lowComplexityCount } = calculateComplexityCount(processedData);
showComplexitySummary(highComplexityCount, lowComplexityCount, processedData);
