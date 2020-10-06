function phAnalyzer(pH) {
  if (pH >= 0 && pH <= 6) {
    return "acidic";
  } else if (pH === 7) {
    return "neutral";
  } else if (pH >= 8 && pH <= 14) {
    return "alkaline";
  } else {
    return "invalid pH value";
  }
}
