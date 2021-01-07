var isPalindrome = function (x) {
  const str = x.toString();

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  const rev = str.split('').reverse().join('');

  if (rev === str) {
    return true;
  } else {
    return false;
  }
};
