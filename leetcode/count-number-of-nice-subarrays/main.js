var numberOfSubarrays = function(nums, k) {
  let len = nums.length - 1;
  let count = 0;
  for (let i = len; i >= k - 1; i--) {
    for (let j = 0; j < nums.length - i; j++) {
      const subArray = nums.slice(j, i + j + 1);
      let countOdd = 0;
      for (let l = 0; l < subArray.length; l++) {
        if (subArray[l] % 2 === 1) {
          countOdd++;
        }
        if (countOdd > k) {
          break;
        }
      }
      countOdd === k && count++;
    }
  }
  return count;
};
