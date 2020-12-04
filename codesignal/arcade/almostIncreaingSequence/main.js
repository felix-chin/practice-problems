function almostIncreasingSequence(sequence) {
  if (sequence.length === 1) {
    return true;
  }
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      let count = 0;
      for (let j = i + 1; j < sequence.length; j++) {
        if (sequence[j] < sequence[i]) {
          count++;
        }
        if (count > 1) {
          return false;
        }
      }
    }
  }
  return true;
}
