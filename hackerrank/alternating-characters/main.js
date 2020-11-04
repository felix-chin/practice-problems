const str = 'abcdefghhgfedecba';

function isValid(s) {
  const map = {};
  const freq = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  for (const key in map) {
    freq.push(map[key]);
  }
  let count = 0;
  if (count > 1) {
    return 'NO';
  } else {
    return 'YES';
  }
}
