// time:
// space:
const arr = [100,2,40,0,31,65,8,40,5];
function activityNotifications(expenditure, d) {
  debugger;
  let n = 0;
  let [i1, i2] = [ Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2, m;
  let countSorted = new Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) {
    countSorted[expenditure[i]]++;
  }
  for (let i = d; i < expenditure.length; i++) {
    // Find Median:
    // since d is the maximum number of elements that will be considered, we know the median will be half of the maximum
    // Example: if d = 5, there are 5 elements. in a sorted array, the 3rd element will be the median.
    // since count sorting sorts elements innately using the index, we can derive the median by
    // by iterating through the index of the count sorted array and counting occurrences until we reach the mid count.
    for (let j = 0, k = 0; k <= i1; k += countSorted[j], j++) {
      m1 = j;
    }
    for (let j = 0, k = 0; k <= i2; k += countSorted[j], j++) {
      m2 = j;
    }
    let m = (m1 + m2) / 2;
    if (expenditure[i] >= m * 2) {
      n++;
    }
    countSorted[expenditure[i - d]]--;
    countSorted[expenditure[i]]++;
  }
  return n;
}
