// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//Brute Force
//time complexity: O(n^2)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return  [i, j]
      }
    }
  }
};


//2 Pass Hash Table solution
const twoSumHash1 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) != i) {
      return [i, map.get(complement)]
    }
  }
}


//1 Pass Hash Table solution
const twoSumHash2 = (nums, target) => {
  const map = new Map();
  let complement;
  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)]
    }
    map.set(nums[i], i);
  }
}
