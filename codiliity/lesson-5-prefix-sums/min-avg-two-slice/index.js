function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let start = 0;
  let currentSum = A[0] + A[1];
  let minAvgSlice = currentSum / 2;
  for (let i = 2; i < A.length; i++) {
    currentSum += A[i];
    let newAvg = currentSum / 3;
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg;
      start = i - 2;
    }
    currentSum -= A[i - 2];
    newAvg = currentSum / 2;
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg;
      start = i - 1;
    }
  }

  return start;
}
