var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;
  while (currNode !== null) {
    const temp = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = temp;
  }
};
