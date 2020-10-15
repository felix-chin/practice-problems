// Example of memoization being used in a recursive algorithm
// space: O(n)?
// time: O(n)?
const memo = {};

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else if (n in memo) {
    return memo[n];
  } else {
    memo[n] = factorial(n - 1) * n;
    return memo[n];
  }
}
