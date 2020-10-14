const longestCommonPrefix = (arr) => {
  let prefix = '';
  let placeholder = '';
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ( arr[i][j] === arr[i - 1][j]) {
        prefix += arr[i][j]
      }
    }
}
