var hasCycle = function (head) {
  const map = new Set();
  while (head !== null) {
    if (map.has(head)) {
      return true;
    } else {
      map.add(head);
      head = head.next;
    }
  }
  return false;
};
