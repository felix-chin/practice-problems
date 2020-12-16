function companyBotStrategy(trainingData) {
  let correctAnswers = 0;
  let totalTime = 0;
  trainingData.forEach(data => {
    if (data[1] === 1) {
      totalTime += data[0];
      correctAnswers++;
    }
  })
  if (correctAnswers === 0) {
    return 0;
  } else {
    return totalTime / correctAnswers;
  }
}
