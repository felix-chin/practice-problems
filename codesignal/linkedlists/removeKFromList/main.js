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
  while (l.value == k) {
    l = l.next;
  }
  let thisNode = l;
  let nextNode = thisNode.next;
  while (nextNode !== null) {
    if (nextNode.value === k) {
      thisNode.next = nextNode.next;
      if (thisNode.next === null) break;
    }
    thisNode = thisNode.next;
    nextNode = thisNode.next;
  }
  return l;
}
