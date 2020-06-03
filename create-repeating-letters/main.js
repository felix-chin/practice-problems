function createRepeatingLetters(word, numOfRepeats) {
  var result = '';
  for(var i = 0; i < word.length; i++) {
    var x = word[i].repeat(numOfRepeats);
    result += x;
  }
  return result;
}
