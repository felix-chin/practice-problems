const reverseString = (str) => {
  const result = str.split('').reverse().join('');
  return result;
}

reverseString('Cat');
reverseString('The Daily Byte');
reverseString('civic');

const reverseString2 = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
