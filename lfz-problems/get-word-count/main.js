function getWordCount(sentence) {
  var spaceCount = 0;
  var trim1 = ltrim(sentence);
  var trim2 = rtrim(trim1);
  for(var i = 0; i < trim2.length; i++) {
    if(trim2[i] === " ") {
      spaceCount++;
    }
  }
  var wordCount = spaceCount + 1;
  return wordCount;
}

function ltrim(str) {
  if (!str) return str;
  return str.replace(/^\s+/g, '');
}

function rtrim(str) {
  if (!str) return str;
  return str.replace(/\s+$/g, '');
}
