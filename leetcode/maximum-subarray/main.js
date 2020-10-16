// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

//Kadane's Algorithm
//Time: O(n)
//Space:
const maxSubArray = (nums) => {
  let maxCurrent = [nums[0]];
  let maxGlobal = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + maxCurrent[i - 1] > nums[i]) {
      maxCurrent[i] = nums[i] + maxCurrent[i - 1] ;
    } else {
      maxCurrent[i] = nums[i];
    };

    if (maxCurrent[i] > maxGlobal[i - 1]) {
      maxGlobal[i] = maxCurrent[i];
    } else {
      maxGlobal[i] = maxGlobal[i - 1];
    };
  }
  return maxGlobal[maxGlobal.length - 1];
}
