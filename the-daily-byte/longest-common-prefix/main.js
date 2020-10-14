const longestCommonPrefix = (arr) => {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].indexOf(prefix) === -1 || arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      i--;
    }
    console.log(prefix);
  }

  return screen.length === 0 ? '' : prefix;
}
