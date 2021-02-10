function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    // check if S[i] is an open or close bracket
    if (map.hasOwnProperty(S[i])) {
      // if close bracket, check if top of stack contains matching open bracket
      if (stack[stack.length - 1] === map[S[i]]) {
        // if it does, remove from stack
        stack.pop();
      } else {
        // if not, add to top of stack
        stack.push(S[i]);
      }
      // if S[i] is an open bracket, add to top of stack
    } else {
      stack.push(S[i]);
    }
  }
  // if characters are properly nested, stack length will be zero
  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}
