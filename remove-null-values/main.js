function removeNullValues(array) {
  for(var i = array.length; i >= 0; i--) {
    if(array[i] === null) {
      array.splice(i, 1);
    }
  }
  return array;
}
