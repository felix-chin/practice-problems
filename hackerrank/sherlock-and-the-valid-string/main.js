// time: O(n)
// space: O(1)
function alternatingCharacters(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    }
  }
  return count;
}
