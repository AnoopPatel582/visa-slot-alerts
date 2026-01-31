const Alert = require("../models/Alert");

// POST /alerts
exports.createAlert = async (req, res, next) => {
  try {
    const { country, city, visaType } = req.body;

    if (!country || !city || !visaType) {
      return res.status(400).json({
        message: "country, city and visaType are required",
      });
    }

    const alert = await Alert.create({ country, city, visaType });

    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};

// GET /alerts?country=&status=
exports.getAlerts = async (req, res, next) => {
  try {
    const { country, status } = req.query;

    const filter = {};
    if (country) filter.country = country;
    if (status) filter.status = status;

    const alerts = await Alert.find(filter).sort({ createdAt: -1 });

    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

// PUT /alerts/:id  (status only)
exports.updateAlertStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        message: "status is required",
      });
    }

    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

// DELETE /alerts/:id
exports.deleteAlert = async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    res.status(200).json({
      message: "Alert deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
