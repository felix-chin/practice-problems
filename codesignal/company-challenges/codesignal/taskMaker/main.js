function taskMaker(source, challengeId) {
  const newSource = source.map(val => {
    return val.split('//')
  })
  let targetIndex;
  let j;
  for (let i = 0; i < newSource.length; i++) {
    if (newSource[i].length > 1 && newSource[i][1].slice(3) == challengeId) {
      targetIndex = i;
      j = i;
      while (newSource[j].length > 1) {
        j--;
      }
      break;
    }
  }
  newSource[j] = [newSource[targetIndex][0] + newSource[targetIndex][2]];
  const res = []
  newSource.forEach(val => {
    if (val.length === 1) {
      res.push(val[0])
    }
  })
  return res;
}
