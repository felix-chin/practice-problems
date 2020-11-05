// Brute Force
// time: O(n^2)
// space: O(n)
function substrCount(n, s) {
  const map = {};
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let subStr = '';
    for (let j = i; j < s.length; j++) {
      subStr += s[j];
      map[subStr] = map[subStr] || 0
      map[subStr]++;
    }
  }
  for (const key in map) {
    if (key.length === 1) {
      counter += map[key];
    } else if (key.length % 2 === 0) {
      let isAnagram = true;
      for (let i = 1; i < key.length; i++) {
        if (key[i] !== key[i - 1]) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        counter += map[key];
      }
    } else {
      let midIndex = Math.floor(key.length / 2);
      let testStr = key.replace(key[midIndex], '');
      let isAnagram = true;
      for (let i = 1; i < testStr.length; i++) {
        if (testStr[i] !== testStr[i - 1]) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        counter += map[key];
      }
    }
  }
  return counter;
}

function substrCount(n, s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let subStr = '';
    for (let j = i; j < s.length; j++) {
      subStr += s[j];
      if (subStr.length === 1) {
        counter++;
      } else if (subStr.length === 2) {
        if (subStr[0] === subStr[1]) {
          counter++;
        }
      } else if (subStr.length % 2 === 0) {
        let char = subStr[0];

      } else {
        let midIndex = Math.ceil(subStr.length / 2);
        let front = '';
        let back = '';
        front = subStr.slice(subStr[i], subStr[midIndex]);
        back = subStr.slice(subStr[midIndex]);
        if (front === back) {
          counter++;
        }
      }
    }
  }
  return counter;
}

function substrCount(n, s) {
  const map = {};
  let counter = 0;
  for (let i = 0; i < n; i++) {
    let subStr = '';
    for (let j = i; j < n; j++) {
      subStr += s[j];
      map[subStr] = map[subStr] || 0
      map[subStr]++;
    }
  }
  for (const key in map) {
    if (key.length === 1) {
      counter += map[key];
    } else if (key.length === 2 && key[0] === key[1]) {
      counter += map[key];
    } else if (key.length > 3 && key.length % 2 === 0) {
      let char = key[0];
      let isAnagram = true;
      for (let i = 1; i < key.length; i++) {
        if(key[i] !== char) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        counter += map[key];
      }
    } else {
      let midIndex = Math.floor(key.length / 2);
      let testStr = key.replace(key[midIndex], '');
      let char = testStr[0];
      let isAnagram = true;
      for (let i = 1; i < testStr.length; i++) {
        if (testStr[i] !== char) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) {
        counter += map[key];
      }
    }
  }
  return counter;
}
