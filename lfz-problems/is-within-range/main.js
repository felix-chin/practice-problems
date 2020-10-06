// check if the first property of min is less than the number
// check if the second property of max is greater than the number
// if either of the above conditions is not true, then return false
// if both conditions are true, then return true

function isWithinRange(number, rangeObject) {
  if(rangeObject.min <= number && rangeObject.max >= number) {
    return true;
  } else {
    return false;
  }
}
