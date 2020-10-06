function removeNullValues(array) {
  for(var i = array.length; i >= 0; i--) {
    if(array[i] === null) {
      array.splice(i, 1);
    }
  }
  return array;
}


// dont use splice - below is more efficient
function removeNullValues2(array) {
  var result = [];
  for (var i = array.length; i >= 0; i--) {
    if (array[i] !== null) {
      result.push(array[i]);
    }
  }
  return result;
}
