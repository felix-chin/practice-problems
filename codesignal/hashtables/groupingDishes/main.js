function groupingDishes(dishes) {
  const map = {};
  let result = [];
  for (let i = 0; i < dishes.length; i++) {
    let dish;
    for (let j = 0; j < dishes[i].length; j++) {
      if (j === 0) {
        dish = dishes[i][j];
      } else if (map[dishes[i][j]]) {
        map[dishes[i][j]].push(dish);
      } else {
        map[dishes[i][j]] = [dish];
      }
    }
  }

  for (const key in map) {
    if (map[key].length >= 2) {
      result = [...result, [key, ...map[key].sort()]];
    }
  }
  return result.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0]);
}
