function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum = 0;
  let min = Infinity;
  const map = new Map();
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    map.set(i, sum)
  }
  for (let i = 0; i < A.length - 1; i++) {
    const diff = Math.abs(map.get(i) * 2 - sum);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}
