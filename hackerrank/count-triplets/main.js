// Brute Force
// time: O(n^3) - no bueno!
// space: O(n)
function countTriplets1(arr, r) {
  const map = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * r === arr[j]) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[j] * r === arr[k]) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

// Single Traversal
// Idea is to traverse in the opposite direction of the array, so that division can be avoided.
//   Maintain 2 Dictionaries / Hash Maps:
// map_arr stores the frequency of the numbers encountered yet
// map_doubles stores the count of 2 sized tuples, which are basically the second and third element of a triplet
// As you go through the array in reverse, either the number encountered will be 1st, 2nd or 3rd number of a triplet it can possibly be a part of.
// If it were to be the 1st, that means, all the 2nd and 3rd must've been already seen in the array (which are suitable, since problem restriction i < j < k). So from all the doubles in the map_doubles, find the count of doubles that allow the 1st, i.e. x to be such that the triplet looks like (x, x.r, x.r.r).
// if it were to be the 2nd in the triplet, we would need to find all the 3rd number appropriate found in the map_arr yet.
// if it were to be the 3rd element, we just need to update in map_arr for that number, so that it can be used as a reference for future doubles.
// Count for all the cases when x is the first element, and return.
// time: O(n)
// space: O(n)
function countTriplets(arr, r) {
  const map = {};
  const pairs = {};
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let xr = x * r;
    let xrr = xr * r;
    if (pairs[[xr, xrr]] !== undefined) {
      count += pairs[[xr, xrr]];
    }
    if (pairs[[x, xr]] === undefined) {
      pairs[[x, xr]] = 0;
    }
    pairs[[x, xr]] += ((map[xr] === undefined) ? 0 : map[xr]);
    if (map[x] === undefined) {
      map[x] = 1;
    } else {
      map[x]++;
    }
  }
  return count;
}
