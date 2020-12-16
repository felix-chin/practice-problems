const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  const arr = data.split('\n').map(el => {
    return el.split(' ');
  }).map(el2 => {
    const i0 = el2[0].split('-');
    const i1 = {};
    i1[el2[1][0]] = el2[2]
    return [[parseInt(i0[0]), parseInt(i0[1])], i1];
  })
  console.log(arr)
})

// const passwordPhilosophy = () => {

// }
