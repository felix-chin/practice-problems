function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      jumps++;
      i++;
    } else if (c[i + 1] === 0) {
      jumps++;
    }
  }
  return jumps;
}
