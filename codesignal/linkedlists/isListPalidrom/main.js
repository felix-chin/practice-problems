// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  let node = l;
  let front = '';
  let back = '';
  while (node) {
    back = node.value + back;
    front += node.value;
    node = node.next;
  }
  if (front === back) {
    return true;
  } else {
    return false;
  }
}
