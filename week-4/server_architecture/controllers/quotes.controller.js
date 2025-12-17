// Initialize requires
const { getData, writeData } = require("../utils/file.utils.js");

// Define functions
function getAllQuotes(req, res) {
  try {
    // Response -> alle quotes
    res.json(getData("quotes.json"));
  } catch (error) {
    res.status(500);
    res.send(`Er ging iets mis: ${error.message}`);
  }
}

function getQuoteFromId(req, res) {
  try {
    // Params - Komt uit het endpoint, query komt van uit request.
    // console.log(req.params, req.query);
    const { questionId } = req.params; // const questionId = req.params.questionId;
    // Neem alle quotes - array
    const allQuotes = getData("quotes.json");
    // Zoeken in array? .find()
    const quoteWithId = allQuotes.find((quote) => quote.id == questionId);
    // Response -> resultaat
    res.json(quoteWithId);
  } catch (error) {
    res.status(500);
    res.send(`Er ging iets mis: ${error.message}`);
  }
}

// Export functions
module.exports = { getAllQuotes, getQuoteFromId };
