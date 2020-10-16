// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//   Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.

// Sorting
// time: using V8, most likely O(n)
// space: depends, most likely O(1)
var isAnagram1 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const x = s.split('').sort().join('');
    const y = t.split('').sort().join('');

    return x === y;
};

// Hash table 1
// time: O(n)
var isAnagram2 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let counter;
        if (map.has(s[i])) {
            counter = (map.get(s[i]))+1;
            map.set(s[i], counter);
        } else {
            map.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        let value;
        if (map.has(t[i])) {
            value = (map.get(t[i]))-1;
            map.set(t[i], value);
        }
    }

    for (const [key, val] of map) {
        if (val !== 0) {
            return false;
        }
    }

    return true;
};


//Hash table 2
var isAnagram3 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let letter of s) {
    if (map.get(letter) === undefined) {
      map.set(letter, 1)
    } else {
      const counter = map.get(letter) + 1;
      map.set(letter, counter);
    }
  }

  for (let letter of t) {
    if (map.get(letter) === undefined) {
      return false;
    } else if (map.get(letter) < 1) {
      return false;
    } else {
      const value = map.get(letter) - 1;
      map.set(letter, value);
    }
  }

  return true;
};
