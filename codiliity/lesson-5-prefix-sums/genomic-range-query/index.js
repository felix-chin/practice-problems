function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = [];
  for (let i = 0; i < P.length; i++) {
    const sliced = S.slice(P[i], Q[i] + 1);
    if (sliced.includes('A')) {
      result[i] = 1;
    } else if (sliced.includes('C')) {
      result[i] = 2;
    } else if (sliced.includes('G')) {
      result[i] = 3;
    } else {
      result[i] = 4;
    }
  }
  return result;
}
