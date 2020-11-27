// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  if (l == null) {
    return null;
  }
  let thisNode = l;
  let nextNode = thisNode.next;
  while (nextNode !== null) {
    if (next.value === k) {
      thisNode.next = nextNode.next;
    }
  }
}
