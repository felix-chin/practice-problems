function oddUpEvenDown(array) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i]--;
    } else {
      array[i]++;
    }
  }
  return array;
}
