//Left and Right Product Lists

var productExceptSelf = function (nums) {
  const left = [];
  const right = [];
  const answer = [];

  left[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  right[nums.length - 1] = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
};
