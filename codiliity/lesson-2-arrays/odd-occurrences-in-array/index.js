function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = new Map()
  for (const num of A) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const [key, value] of map) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}
