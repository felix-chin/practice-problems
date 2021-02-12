function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = A.length;
  const maxStart = [0];
  const maxEnd = [0];

  //find the max slice starting from i = 1 (0 excluded)
  for (let i = 1; i < n - 1; i++) {
    const maxSum = maxStart[i - 1] === undefined ? 0 : maxStart[i - 1] + A[i];
    maxStart[i] = Math.max(maxSum, 0);
  }
  //find the max slice starting from i = n - 2 (n - 1 exluded)
  for (let i = n - 1; i > 0; i--) {
    const maxSum = maxEnd[i + 1] === undefined ? 0 : maxEnd[i + 1] + A[i];
    maxEnd[i] = Math.max(maxSum, 0);
  }
  //find the max sum of maxStart[i - 1] + maxEnd[i + 1]
  let max = 0;
  for (let i = 1; i < n - 1; i++) {
    max = Math.max(max, maxStart[i - 1] + maxEnd[i + 1]);
  }

  return max;
}
