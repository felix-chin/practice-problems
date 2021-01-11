var reverseList = function (head) {
  let prevNode = null;
  let currNode = head;
  while (currNode !== null) {
    const nextTemp = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextTemp;
    }
  return prevNode;
};
