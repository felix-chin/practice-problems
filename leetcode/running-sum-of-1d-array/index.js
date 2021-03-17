var runningSum = function (nums) {
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i - 1] + nums[i]);
  }
  return result;
};
