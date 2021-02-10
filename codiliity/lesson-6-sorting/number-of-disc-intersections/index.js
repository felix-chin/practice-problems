// Brute Force - O(n**2) time
function solution1(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    const lefti = i - A[i];
    const righti = i + A[i];
    for (let j = i + 1; j < A.length; j++) {
      const leftj = j - A[j];
      const rightj = j + A[j]
      if (lefti >= leftj && lefti <= rightj) {
        counter++;
      } else if (leftj >= lefti && leftj <= righti) {
        counter++;
      } else if (righti >= leftj && righti <= rightj) {
        counter++;
      } else if (rightj >= lefti && rightj <= righti) {
        counter++;
      }
      if (counter > 10000000) {
        return -1;
      }
    }
  }
  return counter;
}

// O(n*log(n)) or O(n) time
function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  const left = [];
  const right = [];

  for (let i = 0; i < A.length; i++) {
    left[i] = i - A[i];
    right[i] = i + A[i];
  }

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < A.length; i++) {
    while (j < A.length && right[i] >= left[j]) {
      counter += j - i;
      j++;
    }
    if (counter > 10000000) return -1;
  }
  return counter;
}
