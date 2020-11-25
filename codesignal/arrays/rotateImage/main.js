function rotateImage(a) {
  const n = a.length;
  const x = Math.floor(a.length / 2);
  const y = n - 1;
  for (let i = 0; i < x; i++) {
    for (let j = i; j < y - i; j++) {
      let temp = a[i][j];
      a[i][j] = a[y - j][i];
      a[y - j][i] = a[y - i][y - j];
      a[y - i][y - j] = a[j][y - i];
      a[j][y - i] = temp;
    }
  }
  return a;
}
