function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sqrt = Math.floor(Math.sqrt(N));
  let counter = 0;
  for (let i = 1; i <= sqrt; i++) {
    if (N % i === 0) {
      counter++;
    }
  }

  counter = counter * 2;

  if (sqrt * sqrt === N) {
    counter--;
  }

  return counter;
}
