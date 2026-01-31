const express = require("express");
const router = express.Router();

const {
  createAlert,
  getAlerts,
  updateAlertStatus,
  deleteAlert,
} = require("../controllers/alert.controller");

router.get("/", getAlerts);
router.post("/", createAlert);
router.put("/:id", updateAlertStatus);
router.delete("/:id", deleteAlert);

module.exports = router;
