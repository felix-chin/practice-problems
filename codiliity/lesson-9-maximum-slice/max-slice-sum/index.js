function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxEnding = 0;
  let maxSlice = -Infinity;
  for (const a of A) {
    maxEnding = Math.max(a, maxEnding + a);
    maxSlice = Math.max(maxSlice, maxEnding);
  }
  return maxSlice;
}
