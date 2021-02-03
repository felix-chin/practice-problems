function areFollowingPatterns(strings, patterns) {
  const stringMap = new Map();
  const patternMap = new Map();
  for (let i = 0; i < patterns.length; i++) {
    if (stringMap.has(strings[i])) {
      if (stringMap.get(strings[i]) !== patterns[i]) {
        return false;
      }
    } else if (patternMap.has(patterns[i])) {
      if (patternMap.get(patterns[i]) !== strings[i]) {
        return false;
      }
    } else {
      stringMap.set(strings[i], patterns[i]);
      patternMap.set(patterns[i], strings[i]);
    }
  }
  return true;
}
