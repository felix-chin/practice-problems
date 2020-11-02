// Brute Force
// time: O(n^3) - no bueno!
// space: O(n)
function countTriplets(arr, r) {
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

function countTriplets(arr, r) {
  const map = {};
  const pairs = {};
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let xr = x * r;
    let xrr = xr * r;
    let pair = [xr, xrr];
    if (pairs[pair] !== undefined) {
      count += pairs[pair];
    }
    let doub = [x, xr];
    if (pairs[doub] === undefined) {
      pairs[doub] = 0;
    }
    pairs[doub] += ((map[xr] === undefined) ? 0 : map[xr]);
    if (map[x] === undefined) {
      map[x] = 1;
    } else {
      map[x]++;
    }
  }
  return count;
}
