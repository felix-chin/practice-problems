function rotLeft(a, d) {
  if (d === 0) {
    return a;
  }

  const result = a.slice(0);

  for (let i = 0; i < d; i++) {
    result.push(result.shift());
  }

  return result;
}
