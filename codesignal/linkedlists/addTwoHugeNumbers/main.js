// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  let list1 = a;
  let list2 = b;
  const num1 = [];
  const num2 = [];
  const arr = [];
  while (list1) {
    num1.unshift(list1.value);
    list1 = list1.next;
  }
  while (list2) {
    num2.unshift(list2.value);
    list2 = list2.next;
  }
  if (num1.length === 1 && num1[0] === 0) {
    return b;
  }
  if (num2.length === 1 && num2[0] === 0) {
    return a;
  }
  const n = num1.length > num2.length ? num1.length : num2.length;
  let over = 0;
  let carryover = 0;
  for (let i = 0; i < n; i++) {
    let sum;;
    if (num1[i] === undefined) {
      sum = num2[i] + carryover;
    } else if (num2[i] === undefined) {
      sum = num1[i] + carryover;
    } else {
      sum = num1[i] + num2[i] + carryover;
    }
    if (sum >= 10000) {
      over = sum - 10000;
      arr.push(over)
      carryover = 1;
      if (i === n - 1) {
        arr.push(carryover);
      }
    } else {
      arr.push(sum);
      carryover = 0;
    }
  }
  let result = arr.reverse();
  const c = new ListNode(result[0])
  let curr = c;
  for (let i = 1; i < result.length; i++) {
    node = new ListNode(result[i]);
    curr.next = node;
    curr = curr.next;
  }
  return c;
}
