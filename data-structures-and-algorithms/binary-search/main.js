// Binary Search
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const binarySearch = (numbers, target) => {
  let min = 0;
  let max = numbers.length - 1;
  let i;
  let count = 0;
  while (min <= max) {
    i = Math.floor((max + min) / 2);
    console.log('min: ' + min, 'max: ' + max, 'index: ' + i);
    count += 1;
    if (numbers[i] === target) {
      console.log('Total guesses: ' + count)
      return 'Found at index '  + i;
    } else if (numbers[i] < target) {
      min = i + 1;
    } else {
      max = i - 1;
    }
  }
  return -1;
}
