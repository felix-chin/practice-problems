// hash map
// time: O(n) - for loop
// space: O(n) - hash map of size n
function makeAnagram(a, b) {
  const map = {};
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (map[a[i]] !== undefined) {
      map[a[i]]++;
    } else {
      map[a[i]] = 1;
    }
    count++
  }
  for (i = 0; i < b.length; i++) {
    if (map[b[i]] > 0) {
      map[b[i]]--;
      count--;
    } else {
      count++;
    }
  }
  return count;
}
