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
