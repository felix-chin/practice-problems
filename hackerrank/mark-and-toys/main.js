// time: O(n)
// space: O(1)
function maximumToys(prices, k) {
  let max = 0;
  let toys = 0;
  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    if (max + prices[i] <= k) {
      max += prices[i];
      toys++;
    } else {
      break;
    }
  }
  return toys;
}
