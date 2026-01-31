const Joi = require("joi");

// POST /alerts
exports.createAlertSchema = Joi.object({
  country: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  visaType: Joi.string()
    .valid("Tourist", "Business", "Student")
    .required(),
});

// PUT /alerts/:id
exports.updateStatusSchema = Joi.object({
  status: Joi.string()
    .valid("Active", "Booked", "Expired")
    .required(),
});
