function firstNotRepeatingCharacter(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] === undefined
      ? map[s[i]] = 1
      : map[s[i]]++;
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return s[i];
    }
  }
  return '_';
}
