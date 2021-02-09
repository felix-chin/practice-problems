function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const uniqueValues = new Set();
  for (const num of A) {
    if (!uniqueValues.has(num)) {
      uniqueValues.add(num);
    }
  }
  return uniqueValues.size;
}
