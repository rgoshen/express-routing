// put tests in here and rename file if needed
const { calculateMean } = require("./helpers");

describe("median function", function () {
  test("calculates the median of an even set", function () {
    expect(calculateMean([10, 5, -5, 2])).toEqual(3);
  });
  test("calculates the median of an odd set", function () {
    expect(calculateMean([10, -6, 2])).toEqual(2);
  });
});
