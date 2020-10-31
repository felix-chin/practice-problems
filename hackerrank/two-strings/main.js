function twoStrings(s1, s2) {
  const map = {};
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = i;
  }
  for (let i = 0; i < s2.length; i++) {
    if (map.hasOwnProperty(s2[i])) {
      return 'YES';
    }
  }
  return 'NO';
}
