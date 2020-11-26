var maxFreq = function (s, maxLetters, minSize, maxSize) {
  let max = 0;
  const map = {};
  for (let i = 0; i <= s.length - minSize; i++) {
    let substr = s.substr(i, minSize)
    let letters = 0;
    const letterMap = {};
    for (let j = 0; j < substr.length; j++) {
      if (letterMap[substr[j]]) {
        letterMap[substr[j]]++
      } else {
        letterMap[substr[j]] = 1;
        letters++;
        if (letters > maxLetters) {
          break;
        }
      }
    }
    let count = 0;
    if (letters <= maxLetters) {
      if (map[substr]) {
        map[substr]++;
        count = map[substr];
      } else {
        map[substr] = 1;
        count = map[substr];
      }
    }
    if (count > max) max = count;
  }
  return max;
};
