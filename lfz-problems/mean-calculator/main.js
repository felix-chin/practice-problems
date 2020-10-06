function meanCalculator(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  var mean = sum / numbersArray.length;
  return mean;
}
