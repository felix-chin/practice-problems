function commonChild(s1, s2) {
  const map = {};
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]] !== undefined) {
      map[s1[i]].push(i)
    } else {
      map[s1[i]] = [i]
    }
  }
  console.log(map)
  let currIndex = -1;
  for (let i = 0; i < s2.length; i++) {
    let count = 0;
    for (let k = 0; k < s2.length; k++) {
      if (map.hasOwnProperty(s2[k])) {
        if (map[s2[k]].length > 1) {
          for (let j = 0; j < map[s2[k]].length; j++) {
            if (map[s2[k]][j] > currIndex) {
              currIndex = map[s2[k]][j];
              count++;
              map[s2[k]].splice(j, 1);
              break;
            }
          }
        } else if (map[s2[k]] > currIndex) {
          currIndex = map[s2[k]];
          count++;
          delete map[s2[k]]
          console.log(map[s2[k]], currIndex, count)
        }
      }
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
}
