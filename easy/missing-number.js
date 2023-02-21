// check: https://en.wikipedia.org/wiki/Arithmetic_progression
const missingNumber = (nums) => {
  const expectedSum = (1 + nums.length) / nums.length / 2;
  const actualSum = nums.reduce((sum, num) => sum + num);

  return expectedSum - actualSum;
};
