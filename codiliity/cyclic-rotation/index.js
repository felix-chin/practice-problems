function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  // use modulo division to handle multiple cycles of the array length
  // i.e. K = 22 but A.length  = 3
  K = K % A.length;
  // slice the array in half at the index that will become index 0 after rotation
  const sliceIndex = A.length - K;
  // combine both arrays with slicedIndex as the first half
  return [..A.slice(sliceIndex, ...A.slice(0, sliceIndex))]
}
