function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] !== '.') {
        for (let k = 0; k < grid.length; k++) {
          if (k !== j && grid[i][j] === grid[i][k]) {
            return false;
          }
        }
        for (let k = 0; k < grid.length; k++) {
          if (k !== i && grid[i][j] === grid[k][j]) {
            return false;
          }
        }
      }
    }
  }
  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid.length; j += 3) {
      const map = {};
      if (grid[i][j] !== '.') {
        map[grid[i][j]] !== undefined ? map[grid[i][j]]++ : map[grid[i][j]] = 1;
      }
      if (grid[i][j + 1] !== '.') {
        map[grid[i][j + 1]] !== undefined ? map[grid[i][j + 1]]++ : map[grid[i][j + 1]] = 1;
      }
      if (grid[i][j + 2] !== '.') {
        map[grid[i][j + 2]] !== undefined ? map[grid[i][j + 2]]++ : map[grid[i][j + 2]] = 1;
      }
      if (grid[i + 1][j] !== '.') {
        map[grid[i + 1][j]] !== undefined ? map[grid[i + 1][j]]++ : map[grid[i + 1][j]] = 1;
      }
      if (grid[i + 1][j + 1] !== '.') {
        map[grid[i + 1][j + 1]] !== undefined ? map[grid[i + 1][j + 1]]++ : map[grid[i + 1][j + 1]] = 1;
      }
      if (grid[i + 1][j + 2] !== '.') {
        map[grid[i + 1][j + 2]] !== undefined ? map[grid[i + 1][j + 2]]++ : map[grid[i + 1][j + 2]] = 1;
      }
      if (grid[i + 2][j] !== '.') {
        map[grid[i + 2][j]] !== undefined ? map[grid[i + 2][j]]++ : map[grid[i + 2][j]] = 1;
      }
      if (grid[i + 2][j + 1] !== '.') {
        map[grid[i + 2][j + 1]] !== undefined ? map[grid[i + 2][j + 1]]++ : map[grid[i + 2][j + 1]] = 1;
      }
      if (grid[i + 2][j + 2] !== '.') {
        map[grid[i + 2][j + 2]] !== undefined ? map[grid[i + 2][j + 2]]++ : map[grid[i + 2][j + 2]] = 1;
      }
      console.log(map)
      if (Object.values(map).some(e => e > 1)) return false;
    }
  }
  return true;
}
