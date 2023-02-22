const findDisappearedNumbers = (nums) => {
  let i = 0;

  while (i < nums.length) {
    const currentNumber = nums[i];
    const compareNumber = nums[currentNumber - 1];

    if (currentNumber === compareNumber) {
      i++;
    } else {
      nums[i] = compareNumber;
      nums[currentNumber - 1] = currentNumber;
    }
  }

  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] !== i) {
      result.push(i);
    }
  }

  return result;
};
