class LinkedList {
  list = {};

  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

export { LinkedList, Node };
