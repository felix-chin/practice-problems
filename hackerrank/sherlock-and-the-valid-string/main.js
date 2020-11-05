function isValid(s) {
  const map = {};
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] || 0;
    map[s[i]]++;
  }

  for (const key in map) {
    freq[map[key]] = freq[map[key]] || 0;
    freq[map[key]]++;
  }

  let freqArr = Object.keys(freq).map(Number)

  if (freqArr.length === 1) {
    return 'YES';
  }
  let twoFreq = freqArr.length === 2;
  let [a, b] = freqArr;

  let oneOccurrence = freq[a] === 1 || freq[b] === 1;

  let singleton = (freq[a] === 1 && a === 1) || (freq[b] === 1 && b === 1);

  let diffOfOne = (freq[a] === 1 ? a - b : b - a) === 1;

  if ((singleton || diffOfOne) && twoFreq && oneOccurence) {
    return 'YES'
  }

  return 'NO';
}
