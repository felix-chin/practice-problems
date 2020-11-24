const concatenatedSum = (a) => {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const str = a[i].toString() + a[i].toString();
    result.push(parseInt(str))
  }
  for (let i = 0; i < Math.ceil(a.length / 2); i++) {
    let str1 = '';
    let str2 = '';
    for (let j = 1; j < a.length; j++) {
      str1 = a[i].toString() + a[j].toString();
      str2 = a[j].toString() + a[i].toString();
      result.push(parseInt(str1), parseInt(str2))
    }
  }
  console.log(result);
}

concatenatedSum([1, 2, 3, 4])
11 + 12 + 13 + 21 + 22 + 23 + 31 + 32 + 33
11 + 12 + 13 + 14 + 21 + 22 + 23 + 24+ 31 + 32 + 33 + 34 + 41 + 42 + 43 + 44
