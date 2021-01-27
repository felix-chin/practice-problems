function isLucky(n) {
  const str = n.toString();
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (i < str.length / 2) {
      sum1 += parseInt(str[i]);
    } else if (i >= str.length / 2) {
      sum2 += parseInt(str[i]);
    }
  }
  if (sum1 === sum2) {
    return true;
  } else {
    return false;
  }
}
