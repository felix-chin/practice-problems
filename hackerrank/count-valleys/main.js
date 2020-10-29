function countingValleys(steps, path) {
  // Write your code here
  let valleyCount = 0;
  let altitude = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      altitude--;
    } else {
      altitude++;
    }
    if (altitude === 0 && path[i] === 'U') {
      valleyCount++;
    }
  }
  return valleyCount;
}
