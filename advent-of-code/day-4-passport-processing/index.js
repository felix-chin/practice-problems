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
  let validPassports = 0;
  const set = new Set();

  const addToSet = () => {
    set.add('byr');
    set.add('iyr');
    set.add('pid');
    set.add('eyr');
    set.add('ecl');
    set.add('hcl');
    set.add('hgy')
  }

  for (let i = 0; i < passports.length; i++) {
    if (passports[i] === '') {
      if (set.size === 0) {
        validPassports++;
      }
      addToSet();
    }
    switch(passports[i].slice(0, 3)) {
      case 'byr':
        set.delete('byr');
        break;
      case 'iyr':
        set.delete('iyr');
        break;
      case 'pid':
        set.delete('pid');
        break;
      case 'eyr':
        set.delete('eyr');
        break;
      case 'ecl':
        set.delete('ecl');
        break;
      case 'hcl':
        set.delete('hcl');
        break;
      case 'hgy':
        set.delete('hgy');
    }
  }
}
