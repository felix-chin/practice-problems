// This question is asked by Amazon.Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

//   Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

const jewelsAndStones = (jewels, stones) => {
  const map = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    map[jewels[i]] = i;
  }
  for (let i = 0; i < stones.length; i++) {
    if (map.hasOwnProperty(stones[i])) {
      count++;
    }
  }
  return count;
}
