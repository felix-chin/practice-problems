function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const N = A.length;
  // sort array so that the largest numbers are at the end and the smallest
  // numbers are at the beginning
  A.sort((a, b) => a - b);
  // solution is the greater of the 3 largest or 2 smallest and 1 largest
  // this is because there could be two negative numbers, the product of which
  // would equal a positive number that could be larger than the 2nd and 3rd
  // largest numbers
  return Math.max(A[0] * A[1] * A[N - 1], A[N - 1] * A[N - 2] * A[N - 3])
}
