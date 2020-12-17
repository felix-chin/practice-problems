const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  };
  const arr = data.split('\n').flatMap(val => {
    return val.split(' ');
  });
  passportProcessing(arr);
})

const passportProcessing = (passports) => {
  console.log(passports);
}
