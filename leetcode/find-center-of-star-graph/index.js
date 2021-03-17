var findCenter = function (edges) {
  const set = new Set;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < edges[i].length; j++) {
      if (set.has(edges[i][j])) {
        return edges[i][j];
      } else {
        set.add(edges[i][j])
      }
    }
  }
};
