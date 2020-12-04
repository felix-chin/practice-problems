function almostIncreasingSequence(sequence) {
  if (sequence.length === 1) {
    return true;
  }
  let almostIncreasing = true;
  let counter = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] < sequence[i - 1]) {
      counter++
    }
    if (sequence[i] <= sequence[i - 1] && counter > 1) {
      almostIncreasing = false;
      break;
    }
  }
  return almostIncreasing;
}