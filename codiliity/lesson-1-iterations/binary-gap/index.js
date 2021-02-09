function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  let oneCount = 0;
  let zeroCount = 0;
  let max = 0;
  for (const digit of binary) {
    if (digit === '1') {
      oneCount++;
    } else if (oneCount === 1 && digit === '0'){
      zeroCount++;
    }
    if (oneCount === 2) {
      if (max < zeroCount) {
        max = zeroCount;
      }
      zeroCount = 0;
      oneCount = 1;
    }
  }
  return max;
}
