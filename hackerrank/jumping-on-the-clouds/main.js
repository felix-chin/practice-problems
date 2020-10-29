function sockMerchant(n, ar) {
  let counter = 0;
  const map = {};
  for (let i = 0; i < n; i++) {
    if (map.hasOwnProperty(ar[i])) {
      counter++;
      delete map[ar[i]];
    } else {
      map[ar[i]] = i;
    }
  }
  return counter;
}
