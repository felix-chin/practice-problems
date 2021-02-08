function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let maxToSet = 0;

  for (let i = 0; i < A.length; i++) {
    const X = A[i] - 1;

    if (X === N) {
      maxToSet = maxCounter;
    } else {
      counters[X] = Math.max(counters[X] + 1, maxToSet + 1);
      maxCounter = Math.max(counters[X], maxCounter);
    }
  }

  counters = counters.map(val => Math.max(val, maxToSet));

  return counters;
}
