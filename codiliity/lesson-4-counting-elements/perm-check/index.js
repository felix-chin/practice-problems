function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 1;
  const sortedA = A.sort((a, b) => a - b);
  for (const num of sortedA) {
    if (counter === num) {
      counter++;
    } else {
      return 0;
    }
  }
  return 1;
}
