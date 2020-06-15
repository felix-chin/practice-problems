function wordBuilder(wordToSpell) {
  var newArray = [];
  for(var i = 0; i < wordToSpell.length; i++) {
    if (i > 0) {
      newArray.push(newArray[i - 1] + wordToSpell[i]);
    } else {
      newArray.push(wordToSpell[i]);
    }
  }
  return newArray;
}
