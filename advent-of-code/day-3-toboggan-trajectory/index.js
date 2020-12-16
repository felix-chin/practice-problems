const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  const arr = data.split('\n');
  tobogganTrajectory1(arr);
})

const tobogganTrajectory1 = (map) => {
  let res = 0;
  let j = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i][j] === '#') {
      res++;
    }
    j += 3;
    if (j > map[i].length - 1) {
      j = j - map[i].length;
    }
  }
  console.log(res)
}
