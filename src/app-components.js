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

  size() {
    if (this.headNode === null) {
      return 0;
    }
    let currentNode = this.list;
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

  at(index) {
    if (this.headNode === null) {
      return 'index not applicable';
    }
    let currentNode = this.list;
    let i = 0;
    while (i < index) {
      if (currentNode.nextNode === null) {
        return 'index not applicable';
      }
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  pop() {
    if (this.headNode === null) {
      return;
    }
    let currentNode = this.list;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this.tailNode = currentNode;
  }

  contains(value) {
    if (this.headNode === null) {
      return false;
    }
    let currentNode = this.list;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.headNode === null) {
      return null;
    }
    let currentNode = this.list;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index += 1;
    }
    return null;
  }

  listTraversal(node) {
    if (node === null) {
      return ' -> null';
    }
    if (this.headNode === null) {
      return 'null';
    }
    if (node === this.headNode) {
      return `( ${node.value} )${this.listTraversal(node.nextNode)}`;
    }
    return ` -> ( ${node.value} )${this.listTraversal(node.nextNode)}`;
  }

  toString() {
    return this.listTraversal(this.list);
  }
}
export { LinkedList, Node };
