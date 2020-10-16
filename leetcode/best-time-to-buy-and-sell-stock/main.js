// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

//Brute Force - Nested Loops
//Space Complexity - O(n^2)
//Time Complexity - O(1)
var maxProfit1 = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

//One Pass
//Space Complexity - O(n)
//Time Complexity - O(1)
var maxProfit2 = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};


//Your interviewer asks you to write a function that accepts a sentence and returns the longest word.
// 1. Declare a function
// 2. Split the string into an array, each word assigned to an index
// 2a.Initialize a variable to hold the longest word
// 3. iterate through the array
// 4. for each iteration:
//    a.) check if the length of the word is greater than length of the stringvariable
//    b.) if the length of the word is greater, than assign it to the longest word variable
// 5. return the longest word variable

function longestWord(sentence) {
  let word = '';
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
}
