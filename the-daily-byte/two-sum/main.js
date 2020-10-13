const twoSum = (nums, k) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = k - nums[i];
    if (map[complement] !== undefined) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
}
