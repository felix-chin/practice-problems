// This question is asked by Facebook.Given a string, return whether or not it forms a palindrome ignoring case and non - alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

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

  if (newStr[0] !== newStr[newStr.length - 1]) {
    return false;
  }

  return newStr.split('').reverse().join('') == newStr;
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
