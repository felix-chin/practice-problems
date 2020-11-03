// Bubble Sort
// time: O(n^2)
// space: O(1)
function countSwaps(a) {
  let isSorted = false;
  let lastSorted = a.length - 1;
  let swap;
  let swapCount = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastSorted; i++) {
      if (a[i] > a[i + 1]) {
        swap = a[i + 1];
        a[i + 1] = a[i];
        a[i] = swap;
        swapCount++;
        isSorted = false;
      }
    }
    lastSorted--;
  }
  console.log('Array is sorted in ' + swapCount + ' swaps.');
  console.log('First Element:', a[0]);
  console.log('Last Element:', a[a.length - 1]);
}
