function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let buyPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < buyPrice) {
      buyPrice = A[i];
    } else if (A[i] - buyPrice > maxProfit) {
      maxProfit = A[i] - buyPrice;
    }
  }
  return maxProfit;
}
