function climbingStairs(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  const nums = [1, 1];
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2]
  }
  return nums[n];
}
