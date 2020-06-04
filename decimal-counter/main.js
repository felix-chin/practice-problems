function decimalPlaceCOunter(stringNumber) {
  var count = [];
  var index = null;
  for(var i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === ".") {
      index = i;
    }
  }
  var decimalCount = stringNumber.length - index - 1;
  return decimalCount;
}
