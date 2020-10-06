//Insertion Sort
//time: usually O(n^2); fastest is O(n) for small enough lists
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    for (j; j >= 0 && array[j] > key; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = key;
  }
  return array;
};

// To sum up the running times for insertion sort:
// Worst case: O(n^2)
// Average case for a random array: Θ(n^2)
// "Almost sorted" case: O(n)

//Khan Academy algorithm
// var insertionSort = function (array) {
//   for (var i = 1; i < array.length; i++) {
//     insert(array, i - 1, array[i]);
//   }
//   return array;
// };

// var insert = function (array, rightIndex, value) {
//   for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
//     array[j + 1] = array[j];
//   }
//   array[j + 1] = value;
// };
