function freqQuery(queries) {
  const map = {};
  const result = [];
  let max = 0;
  for (const [key, value] of queries) {
    let v = (map[value] == undefined ? 0 : map[value]);
    if (key === 1) {
      map[value] = v++;
      max = Math.max(max, map[value])
    } else if (key === 2) {
      if (v > 0) {
        map[value] = v--;
      }
    } else {
      if (value <= max) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }
  return result;
}
