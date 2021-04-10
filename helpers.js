function calculateMean(nums) {
  // Takes in an array of numbers and finds the mean.

  if (nums.length === 0) return 0;
  return nums.reduce((acc, cur) => acc + cur) / nums.length;
}

module.exports = {
  calculateMean,
};
