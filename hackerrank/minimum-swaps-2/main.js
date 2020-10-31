function minimumSwaps(arr) {
  let placeholder;
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      placeholder = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = placeholder;
      swaps++
      i--;
    }
  }
  return swaps;
}
