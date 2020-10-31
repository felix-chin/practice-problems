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
