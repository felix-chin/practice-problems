function hashMap(queryType, queries) {
  const map = {};
  let sum = 0;
  let keySum = 0;
  let valueSum = 0;
  for (let i = 0; i < queryType.length; i++) {
    if (queryType[i] === 'insert') {
      map[queries[i][0] - keySum] = queries[i][1] - valueSum;
    } else if (queryType[i] === 'addToValue') {
      valueSum += queries[i][0];
    } else if (queryType[i] === 'addToKey') {
      keySum += queries[i][0];
    } else if (queryType[i] === 'get') {
      sum += map[queries[i][0] - keySum] + valueSum;
    }
  }
  console.log(map, keySum, valueSum)
  return sum;
}

const x = ['insert', 'insert', 'addToValue', 'addToKey', 'get'];
const y = [[1, 2], [2, 3], [2], [1], [3]];
