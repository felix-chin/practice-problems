function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sqrt = Math.floor(Math.sqrt(N));
  let min = Infinity;
  for (let i = 1; i <= sqrt; i++) {
    if (N % i === 0) {
      const perimeter = 2 * (i + (N / i));
      if (perimeter < min) {
        min = perimeter;
      }
    }
  }
  return min;
}
