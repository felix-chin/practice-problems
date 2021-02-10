function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1);
    } else {
      map.set(A[i], 1);
    }
    if (map.get(A[i]) > A.length / 2) {
      return i;
    }
  }
  return -1;
}
