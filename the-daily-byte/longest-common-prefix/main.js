// Horizontal scanning
// time: O(S) where S is the sum of all characters in a string
// space: O(1)
const longestCommonPrefix1 = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      i--;
    }
  }
  return prefix;
}

// Vertical scanning
// time: O(S) where S is the sum of all characters in a string.
//  In the worst case there will be nn equal strings with length mm and the algorithm performs S = m \cdot nS=m⋅n character comparisons.
//  Even though the worst case is still the same as Approach 1, in the best case there are at most n \cdot minLenn⋅minLen comparisons where minLenminLen is the length of the shortest string in the array.
// space: O(1)
const longestCommonPrefix2 = (strs) => {
  if (strs === null || strs.length === 0) {
    return '';
  }
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j].charAt(i) != c) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}
