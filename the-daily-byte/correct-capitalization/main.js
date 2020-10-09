const correctCapitalization = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      count++;
    }
  }

  if (str[0] === str[0].toLowerCase()) {
    return count === 0;
  } else if (str[0] === str[0].toUpperCase()) {
    return count === 1 || count === str.length;
  }
}
