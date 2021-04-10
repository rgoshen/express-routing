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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
