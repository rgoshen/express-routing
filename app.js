const express = require("express");
const app = express();
const { convertToNumbers, calculateMean } = require("./helpers");
const ExpressError = require("./expressError");

app.get("/mean", function (req, res) {
  let nums = convertToNumbers(req.query.nums);
  let result = {
    operation: "mean",
    value: calculateMean(nums),
  };
  return res.send(result);
});

/** general error handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
