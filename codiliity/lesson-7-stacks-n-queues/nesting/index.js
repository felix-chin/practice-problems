// Counting
function solution1(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            counter++;
        } else {
            counter--;
        }
    }
    if (counter === 0) {
        return 1;
    } else {
        return 0;
    }
}

// Stack
function solution2(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(S[i]);
    } else if (S[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(S[i]);
      }
    }
  }
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
