function sortByHeight(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === -1) {
      continue;
    }
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === -1) {
        continue;
      } else if (a[i] > a[j]) {
        const temp = a[j];
        a[j] = a[i];
        a[i] = temp;
      }
    }
  }
  return a;
}
