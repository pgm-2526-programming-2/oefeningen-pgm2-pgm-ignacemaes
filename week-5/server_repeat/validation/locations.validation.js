const Joi = require("joi");

const locationBlueprint = Joi.object({
  name: Joi.string().trim().min(1).required(),
  country: Joi.string().trim().min(1).required(),
  city: Joi.string().trim().min(1).required(),
  coordinates: Joi.object({
    lat: Joi.number().min(-90).max(90).required(),
    long: Joi.number().min(-180).max(180).required(),
  }).required(),
});

module.exports = locationBlueprint;
