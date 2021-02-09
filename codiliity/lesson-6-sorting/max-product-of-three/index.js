function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const N = A.length;
  A.sort((a, b) => a - b);
  return Math.max(A[0] * A[1] * A[N - 1], A[N - 1] * A[N - 2] * A[N - 3])
}
