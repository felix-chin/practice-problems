const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  const arr = data.split('\n');
  console.log(tobogganTrajectory1(arr) * tobogganTrajectory2(arr));
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
  console.log('pt1', res);
  return res;
}

const tobogganTrajectory2 = (map) => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let j1 = 0;
  let j2 = 0;
  let j3 = 0;
  let j4 = 0;
  for (let i = 0; i < map.length; i++) {
    map[i][j1] === '#' && count1++;
    map[i][j2] === '#' && count2++;
    map[i][j3] === '#' && count3++;
    j1++;
    j2 += 5;
    j3 += 7;
    if (j1 > map[i].length - 1) j1 = j1 - map[i].length;
    if (j2 > map[i].length - 1) j2 = j2 - map[i].length;
    if (j3 > map[i].length - 1) j3 = j3 - map[i].length;
    if (i % 2 === 0) {
      map[i][j4] === '#' && count4++;
      j4 += 1;
      if (j4 > map[i].length - 1) j4 = j4 - map[i].length;
    }
  }
  let res = count1 * count2 * count3 * count4;
  console.log('pt2', res);
  return res;
}
