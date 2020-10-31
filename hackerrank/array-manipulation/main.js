// Brute Force solution
// time: O(n^2)
// space: probably O(n^2) from 2D queries array
function arrayManipulation(n, queries) {
  const result = [];
  let maxValue = -Infinity;
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      result[j] += queries[i][2];
      if (result[j] > maxValue) {
        maxValue = result[j];
      }
    }
  }
  return maxValue;
}

// Calculate the rate of change (slope)
// return where sum of rate of change is largest value
// time: O(n)
// space: probably O(n^2) from 2D queries array
function arrayManipulation(n, queries) {
  const result = [];
  let max = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  for (const query of queries) {
    result[query[0] - 1] += query[2];
    if (result[query[1]] !== undefined) {
      result[query[1]] += -query[2];
    }
  }
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
