function firstDuplicate(a) {
  const map = {};
  for (let i = 0; i < a.length; i++) {
    if (map[a[i]] === undefined) {
      map[a[i]] = i;
    } else if (map.hasOwnProperty(a[i])) {
      return a[i];
    }
  }
  return -1;
}
