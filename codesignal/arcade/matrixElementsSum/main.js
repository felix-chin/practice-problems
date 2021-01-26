function matrixElementsSum(matrix) {
  const map = {};
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && !map.hasOwnProperty(j)) {
        map[j] = 0;
      }
      if (matrix[i][j] === 0) {
        map[j] = 1;
      }
      if (map[j] === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
