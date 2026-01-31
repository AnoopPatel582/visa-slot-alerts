const express = require("express");
const router = express.Router();

const validate = require("../middleware/validate");
const {
  createAlertSchema,
  updateStatusSchema,
} = require("../middleware/validators/alert.validator");

const {
  createAlert,
  getAlerts,
  updateAlertStatus,
  deleteAlert,
} = require("../controllers/alert.controller");

router.get("/", getAlerts);

router.post(
  "/",
  validate(createAlertSchema),
  createAlert
);

router.put(
  "/:id",
  validate(updateStatusSchema),
  updateAlertStatus
);

router.delete("/:id", deleteAlert);

module.exports = router;
