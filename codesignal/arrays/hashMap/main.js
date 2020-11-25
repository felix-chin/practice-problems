function hashMap(queryType, queries) {
  class HashMap {
    constructor() {
      this.keys = [];
      this.values = [];
    }

    insert(arr) {
      const [key, value] = arr;
      this.keys.push(key);
      this.values.push(value);
    }

    get(key) {
      const index = this.keys.indexOf(key[0]);
      return this.values[index];
    }

    addToValue(num) {
      const newValues = this.values.map(value => value += num[0]);
      this.values = newValues;
    }

    addToKey(num) {
      const newKeys = this.keys.map(key => key += num[0]);
      this.keys = newKeys;
    }
  }
  const map = new HashMap();
  let sum = 0;
  for (let i = 0; i < queryType.length; i++) {
    if (queryType[i] === 'insert') {
      map.insert(queries[i]);
    } else if (queryType[i] === 'get') {
      sum += map.get(queries[i]);
    } else if (queryType[i] === 'addToValue') {
      map.addToValue(queries[i]);
    } else {
      map.addToKey(queries[i]);
    }
  }
  return sum;
}

const x = ['insert', 'insert', 'addToValue', 'addToKey', 'get'];
const y = [[1, 2], [2, 3], [2], [1], [3]];
