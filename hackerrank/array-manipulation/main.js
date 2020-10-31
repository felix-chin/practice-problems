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

function arrayManipulation(n, queries) {
  const result = [];
  let globalMax = 0;
  let currentMax = 0;
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  for (let i = 0; i < queries.length; i++) {
    result[queries[i][0] - 1] += queries[i][2];
    if (result[queries[i][1]] !== undefined) {
      result[queries[i][1]] += -queries[i][2];
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] < 0) {
      currentMax = 0;
    }
    if (result[i] + currentMax > currentMax) {
      currentMax = result[i] + currentMax;
    }
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}
