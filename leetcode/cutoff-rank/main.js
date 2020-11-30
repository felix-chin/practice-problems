function cutOffRank(cutOff, num, scores) {
  const result = [];
  let rank = 1;
  let count = 0;
  scores.sort((a, b) => b - a);
  for (let i = 0; i < scores.length; i++) {
    if (i > 0 && scores[i] === scores[i - 1]) {
      result.push(result[i - 1]);
      if (result[i - 1] <= cutOff) {
        count++;
      }
    } else {
      result.push(rank);
      if (rank <= cutOff) {
        count++;
      }
    }
    rank++;
  }
  return count;
}
