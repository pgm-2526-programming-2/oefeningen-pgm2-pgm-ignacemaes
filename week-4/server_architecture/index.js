// Initialize requires
const express = require("express");
const quotesRouter = require("./routes/quotes.routes.js");

// Initialize express application
const app = express();

// Initialize routers
app.use("/api", quotesRouter);

// Define path variables (UPPERCASE because of constants)
const PORT = 8080;
const HOST = "localhost";

// Starts the server
app.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`Server is opgestart en draaiende op http://${HOST}:${PORT}`);
});
