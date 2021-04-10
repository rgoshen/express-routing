function convertToNumbers(numsAsStrings) {
  const numsArray = numsAsStrings.split(",");
  let result = [];

  for (value of numsArray) {
    let valToNum = Number(value);
    result.push(valToNum);
  }
  return result;
}

function calculateMean(nums) {
  // Takes in an array of numbers and finds the mean.

  if (nums.length === 0) return 0;
  return nums.reduce((acc, cur) => acc + cur) / nums.length;
}

module.exports = {
  convertToNumbers,
  calculateMean,
};
