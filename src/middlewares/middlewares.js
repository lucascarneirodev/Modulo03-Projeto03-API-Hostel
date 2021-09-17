require("express-async-errors");

const validEndPoint = (req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
};

const errorHandle = (error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || "Server Error",
    },
  });
};

module.exports = { validEndPoint, errorHandle };