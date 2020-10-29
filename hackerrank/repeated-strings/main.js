function repeatedString(s, n) {
  let a = 0;

  let complement = 0;

  const remainder = n % s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      a++;
    }
    if (i + 1 === remainder && remainder !== 0) {
      complement = a;
    }
  }

  const result = (((n - remainder) / s.length) * a) + complement;

  return result;
}
