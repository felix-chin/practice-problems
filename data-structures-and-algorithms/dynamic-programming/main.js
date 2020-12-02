// dynamic programming
// fibonacci with memoization
let memo = {};
const fib = (n) => {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }
  memo[n] = result;
  return result;
}
