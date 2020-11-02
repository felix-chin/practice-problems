// Brute Force
// 1. Iterate through string to find all possible substrings
// 2. sort substrings and then store in hash map with substring as key and increment value based on occurences
// 3. if new substring, add to hash map, otherwise increment counter by number of occurences
// 4.  (do not increment counter by one, increment hash map occurences and then increase counter by number of occurences when encountered)
// space: O(n^2)
// time: O(n)

function sherlockAndAnagrams(s) {
  const map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let subStr = '';
    let mapStr = '';
    for (let j = i; j < s.length; j++) {
      subStr += s[j];
      mapStr = subStr.split('').sort().join('');
      if (map.hasOwnProperty(mapStr)) {
        counter += map[mapStr];
        map[mapStr]++;
      } else {
        map[mapStr] = 1;
      }
    }
  }
  return count;
}
