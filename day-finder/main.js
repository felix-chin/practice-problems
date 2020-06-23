function dayFinder(stringDate) {
  const date = new Date(stringDate);
  const day = date.getDay();
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
  return dayArray[day];
}
