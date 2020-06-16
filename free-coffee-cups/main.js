function freeCoffeeCups(coffeeCups) {
  var freeCups = Math.floor(coffeeCups / 6);
  return freeCups + coffeeCups;
}

function freeCoffeeCups2(cups) {
  var remainder = cups % 6;
  var freeCups = (cups - remainder) / 6;
  return cups + freeCups;
}
