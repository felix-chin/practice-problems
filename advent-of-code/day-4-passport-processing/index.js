const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  };
  const arr = data.split('\n').flatMap(val => {
    return val.split(' ');
  });
  passportProcessing1(arr);
  passportProcessing2(arr);
})

const passportProcessing1 = (passports) => {
  let validPassports = 0;
  const set = new Set();

  const addToSet = () => {
    set.add('byr');
    set.add('iyr');
    set.add('pid');
    set.add('eyr');
    set.add('ecl');
    set.add('hcl');
    set.add('hgt')
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
      case 'hgt':
        set.delete('hgt');
    }
  }

  console.log(validPassports);
}

const passportProcessing2 = (passports) => {
  let validPassports = 0;
  const set = new Set();

  const addToSet = () => {
    set.add('byr');
    set.add('iyr');
    set.add('pid');
    set.add('eyr');
    set.add('ecl');
    set.add('hcl');
    set.add('hgt')
  }

  for (let i = 0; i < passports.length; i++) {
    if (passports[i] === '') {
      if (set.size === 0) {
         validPassports++;
      }
      addToSet();
    }

    const code = passports[i].slice(0, 3);
    if (code === 'byr' && parseInt(passports[i].slice(4)) >= 1920 && parseInt(passports[i].slice(4)) <= 2002) {
      set.delete('byr');
    } else if (code === 'iyr' && parseInt(passports[i].slice(4)) >= 2010 && parseInt(passports[i].slice(4)) <= 2020) {
      set.delete('iyr');
    } else if (code === 'pid' && passports[i].slice(4).length === 9) {
      set.delete('pid');
    } else if (code === 'eyr' && parseInt(passports[i].slice(4)) >= 2020 && parseInt(passports[i].slice(4)) <= 2030) {
      set.delete('eyr');
    } else if (code === 'ecl') {
      const color = passports[i].slice(4);
      if (color === 'amb' || color === 'blu' || color === 'brn' || color === 'gry' || color === 'grn' || color === 'hzl' || color === 'oth') {
        set.delete('ecl');
      }
    } else if (code === 'hcl' && passports[i].slice(4, 5) === '#' && passports[i].slice(5).length === 6) {
      const hairCode = /^[a-z0-9]+$/;
      if (hairCode.test(passports[i].slice(5))) {
        set.delete('hcl');
      }
    } else if (code === 'hgt') {
      if (passports[i].slice(-2) === 'cm' && parseInt(passports[i].slice(-5, -2)) >= 150 && parseInt(passports[i].slice(-5, -2)) <= 193) {
        set.delete('hgt');
      } else if (passports[i].slice(-2) === 'in' && parseInt(passports[i].slice(-4, -2)) >= 59 && parseInt(passports[i].slice(-4, -2)) <= 76) {
        set.delete('hgt');
      }
    }
  }

  console.log(validPassports);
}
