function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) {
    return 1;
  }
  const sortedA = A.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < sortedA.length; i++) {
    if (count !== sortedA[i]) {
      return count;
    } else {
      count++;
    }
  }
  return count;
}
