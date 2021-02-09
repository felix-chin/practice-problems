// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    if (leaves.has(A[i])) {
      continue;
    } else {
      leaves.add(A[i])
    }
    if (leaves.size === X) {
      return i;
    }
  }
  return -1;
}
