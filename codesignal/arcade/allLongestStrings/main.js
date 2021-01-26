function allLongestStrings(inputArray) {
  let longest = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
    }
  }
  const results = inputArray.filter((element) => {
    if (element.length === longest) {
      return element;
    }
  })
  return results;
}
