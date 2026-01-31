const express = require("express");
const cors = require("cors");

const alertRoutes = require("./routes/alert.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/alerts", alertRoutes);

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;
