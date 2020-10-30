function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length - 1; i++) {
    let num = null;
    if (q[i] > q[i + 1]) {
      num = q[i + 1];
      q[i + 1] = q[i];
      q[i] = num;
      bribes++;
      if (q[i + 1] > q[i + 2]) {
        num = q[i + 2];
        q[i + 2] = q[i + 1];
        q[i + 1] = num;
        bribes++;
        if (q[i + 2] > q[i + 3]) {
          console.log('Too chaotic');
          return;
        }
      }
    }
    if (q[i] < q[i - 1]) {
      i = i - 2;
    }
  }
  console.log(bribes);
}
