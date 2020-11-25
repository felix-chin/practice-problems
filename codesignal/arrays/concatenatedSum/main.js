const concatenatedSum = (a) => {
  let sum = 0;
  let offset = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    const size = a[i].toString().length;
    offset += Math.pow(10, size);
  }
  return sum * a.length + sum * offset;
}
concatenatedSum([10, 2])
