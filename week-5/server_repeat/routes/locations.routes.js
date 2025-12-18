const { Router } = require("express");
const { getLocations, addLocation } = require("../controllers/locations.controllers");
const locationsRouter = Router();

locationsRouter.get("/locations", getLocations);
locationsRouter.post("/locations", addLocation);

module.exports = locationsRouter;
