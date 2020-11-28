// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  if (l === null) {
    return l;
  }
  while (l.value === k) {
    if (l.next === null) {
      return null;
    } else {
      l = l.next;
    }
  }
  let thisNode = l;
  while (thisNode.next !== null) {
    if (thisNode.next.value === k) {
      thisNode.next = thisNode.next.next;
      if (thisNode.next === null) {
        break;
      }
    }
    if (thisNode.next.value !== k) {
      thisNode = thisNode.next;
    }
  }
  return l;
}
