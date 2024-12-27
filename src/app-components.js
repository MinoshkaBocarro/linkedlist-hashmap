class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  list = {};

  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.list = newNode;
      this.headNode = this.list;
      this.tailNode = this.list;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
      // pay attention to this for potential bugs
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.list;
    this.headNode = newNode;
    this.list = newNode;
  }

  listTraversal(node) {
    if (node.nextNode === null) {
      return 1;
    }
    return 1 + this.listTraversal(node.nextNode);
  }

  size() {
    if (this.headNode === null) {
      return 0;
    }
    let currentNode = this.list;
    console.log(currentNode);
    let total = 1;
    while (currentNode.nextNode !== null) {
      total += 1;
      currentNode = currentNode.nextNode;
    }
    return total;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }
}

export { LinkedList, Node };
