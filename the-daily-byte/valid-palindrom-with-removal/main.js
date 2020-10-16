// This question is asked by Facebook.Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
//   Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

//     Ex: Given the following strings...

// "abcba", return true
// "foobof", return true(remove the first 'o', the second 'o', or 'b')
// "abccab", return false

//Recursive solution
const validPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  };

  if (str[0] !== str[str.length - 1]) {
    return false;
  };

  return validPalindrome(str.slice(1, -1));
}

validPalindrome("level");
validPalindrome("algorithm");
validPalindrome("a man, a plan, a canal: Panama.");

//For loop solution
const validPalindrome2 = (str) => {
  if (str.length <= 1) {
    return true;
  };

  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '.' || str[i] !== ',' || str[i] !== ':' || str[i] !== ' ' ) {
      newStr += str[i];
    }
  };

  console.log(newStr);

  if (newStr[0] !== newStr[newStr.length - 1]) {
    return false;
  };

  let reverseStr = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  };

  return newStr === reverseStr;
}


const fizzBuzz = () => {
  for (let i = 1; i <= 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizz buzz!');
    } else if (i % 3 === 0) {
      console.log('fizz!');
    } else if (i % 5 === 0) {
      console.log('buzz!');
    } else {
      console.log(i);
    }
  }
}
