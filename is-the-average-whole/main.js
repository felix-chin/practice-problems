function isTheAverageWhole(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  var average = sum / numbersArray.length;
  average = average.toString()
  var averageWhole = null;
  var decimal = 0;

  for (var k = 0; k < average.length; k++) {
    if (average[k] === ".") {
      decimal++
    }
  }

  if (!decimal) {
    averageWhole = true;
  } else {
    averageWhole = false;
  }

  return averageWhole;
}
