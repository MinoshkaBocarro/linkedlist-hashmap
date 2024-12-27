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
      this.list = newNode;
      this.head = this.list;
      this.tail = this.list;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
      // pay attention to this for potential bugs
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.list;
    this.head = newNode;
    this.list = newNode;
  }

  listTraversal(node) {
    if (node.nextNode === null) {
      return 1;
    }
    return 1 + this.listTraversal(node.nextNode);
  }

  size() {
    return this.listTraversal(this.list);
  }
}

export { LinkedList, Node };
