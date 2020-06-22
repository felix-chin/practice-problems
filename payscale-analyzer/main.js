function payscaleAnalyzer(payList) {
  let high = null;
  let low = payList[0];
  for(let i = 0; i < payList.length; i++) {
    if (payList[i] > high) {
      high = payList[i];
    }
    if (payList[i] < low) {
    low = payList[i];
    }
  }
  return high - low;
}
