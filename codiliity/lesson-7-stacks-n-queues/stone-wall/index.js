function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sum = 0;
  let stackIndex = 0;
  let stack = [];

  for (let i = 0; i < H.length; i++) {
    while (stackIndex > 0 && stack[stackIndex - 1] > H[i]) {
      stackIndex--;
    }
    if (stackIndex > 0 && stack[stackIndex - 1] === H[i]) {
      continue;
    } else {
      sum++;
      stack[stackIndex] = H[i];
      stackIndex++;
    }
  }

  return sum;
}
