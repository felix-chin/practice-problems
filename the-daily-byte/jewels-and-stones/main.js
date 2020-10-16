const jewelsAndStones = (jewels, stones) => {
  const map = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = i;
  }
  for (let i = 0; i < stones.length; i++) {
    if (map.hasOwnProperty(stones[i])) {
      count++;
    }
  }
  return count;
}
