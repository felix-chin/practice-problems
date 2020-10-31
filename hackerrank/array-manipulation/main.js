function checkMagazine(magazine, note) {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < note.length; i++) {
    if (map[note[i]] > 0) {
      map[note[i]]--;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}
