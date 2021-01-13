var hasCycle = function (head) {
  let node = head;
  const map = {};
  while (node !== null) {
    if (map[node.val] === node.next) {
      return true;
    } else {
      map[node.val] = node.next;
      node = node.next
    }
  }
  return false;
};
