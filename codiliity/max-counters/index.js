function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = new Array(N).fill(0);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      result.fill(max);
    } else {
      result[A[i] - 1]++;
      if (result[A[i] - 1] > max) {
        max = result[A[i] - 1];
      }
    }
  }
  return result;
}
