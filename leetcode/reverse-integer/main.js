var reverse = function (x) {
  let res = x.toString().split('').reverse().join('');
  if (res[res.length - 1] === '-') {
    res = '-' + res.slice(0, res.length - 1)
  }
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return 0;
  }
  return parseInt(res);
};
