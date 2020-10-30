function minimumSwaps(arr) {
  let placeholder;
  let mid = Math.floor(arr.length / 2)
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[mid]) {
      placeholder = arr[mid];
      arr[mid] = arr[0];
      arr[0] = placeholder;
    }
  }
}
