// Initialize requires
const express = require("express");
const { getAllQuotes, getQuoteFromId } = require("../controllers/quotes.controller");

// Define router, collection of multiple routes
const quotesRouter = express.Router();

// Define endpoints
// quotesRouter.get("/api/quotes",(req, res) => {})
quotesRouter.get("/quotes", getAllQuotes); // Geen haakjes, standaard parameters worden automatisch doorgegeven
quotesRouter.get("/quotes/:id", getQuoteFromId);
quotesRouter.post("/quotes", (req, res) => {
  res.send("Post request");
});

module.exports = quotesRouter;
