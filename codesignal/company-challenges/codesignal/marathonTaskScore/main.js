function marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) {
  if (successfulSubmissionTime === -1) {
    return 0
  };
  let score = maxScore;
  const timePenalty = successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
  const attemptPenalty = (submissions - 1) * 10;
  score = maxScore - timePenalty - attemptPenalty;
  if (score < maxScore / 2) {
    return maxScore / 2;
  } else {
    return score;
  }
}
