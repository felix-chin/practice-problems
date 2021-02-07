function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1 || K === 0) {
    return A;
  }
  const result = new Array(A.length)
  const len = A.length - 1;
  A.forEach((num, i) => {
    let index = i + K;
    if (index > len) {
      index = index - len - 1;
    }
    result[index] = num;
  })
  return result;
}
