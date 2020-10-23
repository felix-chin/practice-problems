// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
  const map = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      complement = (nums[j] + nums[i]) * -1;
      if (map[complement]) {
        result.push([nums[i], nums[j], complement]);
      };
    }
  }
  return result;
};
