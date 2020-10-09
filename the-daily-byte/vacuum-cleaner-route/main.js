const vacuumCleanerRoute = (str) => {
  let y = 0;
  let x = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'L':
        x--;
        break;
      case 'R':
        x++;
        break;
      case 'U':
        y++;
        break;
      case 'D':
        y--;
    }
  }
  return x === 0 && y === 0;
}
