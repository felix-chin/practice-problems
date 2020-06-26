function accountNumberProtector(cardNumberString) {
  const prefix = '**'
  let result = '';
  for (var i = 0; i < cardNumberString.length ; i++) {
    if (i > 11) {
      result += cardNumberString[i];
    }
  }
  return prefix + result;
}
