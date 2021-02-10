function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    // check if S[i] is a closing bracket
    if (map.hasOwnProperty(S[i])) {
      // if closing bracket, check if top of stack contains matching opening bracket
      if (stack[stack.length - 1] === map[S[i]]) {
        // if it does, remove from stack
        stack.pop();
      } else {
        // if not, add to top of stack
        stack.push(S[i]);
      }
      // if S[i] is an opening bracket, add to top of stack
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
