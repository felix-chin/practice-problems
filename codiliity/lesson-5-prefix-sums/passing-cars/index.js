function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let factor = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      factor++;
    } else if (A[i] === 1) {
      count += (factor * 1);
      if (count > 1000000000) {
        return -1;
      }
    }
  }
  return count;
}
