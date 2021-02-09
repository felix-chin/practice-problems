function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = new Array(A.length + 1).fill(false);
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 1) {
      continue;
    }
    arr[A[i] - 1] = true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      return i + 1;
    }
  }
}
