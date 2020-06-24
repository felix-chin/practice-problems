function spellChecker(userWords, correctWords) {
  const result = {
    correct: [],
    incorrect: []
  }
  for(let i = 0; i < correctWords.length; i++) {
    if (userWords[i] !== correctWords[i]) {
      result.incorrect.push(userWords[i]);
    } else {
      result.correct.push(userWords[i]);
    }
  }
  return result;
}
