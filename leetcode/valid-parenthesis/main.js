// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//   Open brackets must be closed by the same type of brackets.
//   Open brackets must be closed in the correct order.

//Remove valid sub-strings - from inside out
//time: most likely O(n);
var isValid1 = function(s) {
    const arr = s.split('');
    for (let i = 0; i < arr.length / 2; i++) {
        const str = arr[i] + arr[i + 1];
        if (str === "[]" || str === "{}" || str === "()") {
            arr.splice(i, 2);
            i = -1;
        }
    }
    return arr.length === 0;
};


var isValid2 = function(s) {

    const mapping = [
      ['}', '{'],
      [']', '['],
      [')', '(']
    ]

    const map = new Map(mapping)

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (stack[stack.length - 1] === map.get(s[i])) {
                stack.pop(s[i])
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

var isValid3 = function (s) {
  if (s === null || s === undefined) {
    return false;
  }

  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      const topElement = (stack.length === 0) ? '#' : stack.pop();
      if (topElement !== map[s[i]]) {
        return false;
      };
    } else {
      stack.push(s[i]);
    };
  };

  return stack.length === 0;
};
