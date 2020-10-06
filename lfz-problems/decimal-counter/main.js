function decimalPlaceCOunter(stringNumber) {
  var index = null;
  var decimalCount = 0;
  for(var i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === ".") {
      index = i;
    }
  }
  if (index === null) {
    decimalCount = 0;
  } else {
    decimalCount = stringNumber.length - index - 1;
  }
  return decimalCount;
}
