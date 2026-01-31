const express = require("express");
const cors = require("cors");

const alertRoutes = require("./routes/alert.routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Routes
app.use("/alerts", alertRoutes);

// Error handler (last)
app.use(errorHandler);

module.exports = app;
