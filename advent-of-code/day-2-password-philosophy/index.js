const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  const arr = data.split('\n').map(el => {
    return el.split(' ');
  }).map(el2 => {
    const i0 = el2[0].split('-');
    return [parseInt(i0[0]), parseInt(i0[1]), el2[1][0], el2[2]];
  })
  passwordPhilosophy1(arr);
  passwordPhilosophy2(arr);
})

const passwordPhilosophy1 = (list) => {
  let res = 0;
  for (let i = 0; i < list.length; i++) {
    let countLetter = 0;
    for (let j = 0; j < list[i][3].length; j++) {
      if (list[i][3][j] === list[i][2]) {
        countLetter++;
      }
    }
    if (countLetter >= list[i][0] && countLetter <= list[i][1]) {
      res++;
    }
  }
  console.log(res)
}

const passwordPhilosophy2 = (list) => {
  let res = 0;
  for (let i = 0; i < list.length; i++) {
    const firstIndex = list[i][0] - 1;
    const secondIndex = list[i][1] - 1;
    if (list[i][3][firstIndex] === list[i][2] && list[i][3][secondIndex] !== list[i][2]) {
      res++
    } else if (list[i][3][firstIndex] !== list[i][2] && list[i][3][secondIndex] === list[i][2]) {
      res++
    }
  }
  console.log(res)
}
