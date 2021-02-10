function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  const downStream = [];
  const upStream = [];

  for (let i = 0; i < A.length; i++) {
    if (B[i] === 0) {
      while (downStream.length > 0) {
        const fish = downStream.pop()
        if (fish > A[i]) {
          downStream.push(fish);
          break;
        }
      }
      if (downStream.length === 0) {
        upStream.push(A[i]);
      }
    } else {
      downStream.push(A[i]);
    }
  }
  return downStream.length + upStream.length;
}
