class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  list = {};

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      Object.assign(this.list, newNode);
      this.head = this.list;
      this.tail = this.list;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      // pay attention to this for potential bugs
    }
  }
}

export { LinkedList, Node };
