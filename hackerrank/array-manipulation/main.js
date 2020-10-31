function checkMagazine(magazine, note) {
  if (magazine.length < note.length) {
    console.log('No');
    return;
  }
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < note.length; i++) {
    if (!map.hasOwnProperty(note[i]) || map[note[i]] === 0) {
      console.log('No');
      return;
    } else {
      map[note[i]]--;
    }
  }
  console.log(map)
  console.log('Yes');
}
