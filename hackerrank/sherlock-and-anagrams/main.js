function sherlockAndAnagrams(s) {
  const map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let mapStr = '';
    for (let j = i; j < s.length; j++) {
      mapStr += s[j];
      if (map.hasOwnProperty(mapStr)) {
        map[mapStr]++;
      } else if (mapStr.length !== s.length) {
        map[mapStr] = 1;
      }
    }
  }
  for (key in map) {
    if (key.length)
  }
  console.log(map);
  return count;
}
