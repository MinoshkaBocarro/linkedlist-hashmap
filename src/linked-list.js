class Node {
  constructor({ key, value }) {
    this.key = key || null;
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
    const searchKey = Object.keys(value)[0];

    if (this.headNode === null) {
      return null;
    }
    let currentNode = this.list;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode[`${searchKey}`] === value[`${searchKey}`]) {
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

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let currentNode = this.list;
      let i = 0;
      while (i < index - 1) {
        if (currentNode.nextNode === null) {
          return 'index exceeds list length';
        }
        currentNode = currentNode.nextNode;
        i++;
      }
      if (currentNode.nextNode === null) {
        this.append(value);
      } else {
        const newNode = new Node(value);
        const splitNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        currentNode.nextNode.nextNode = splitNode;
      }
    }
    return this.list;
  }

  removeAt(index) {
    if (index === 0) {
      const newList = this.list.nextNode;
      this.list = newList;
      this.headNode = newList;
      if (newList === null) {
        this.tailNode = null;
      } else if (newList.nextNode === null) {
        this.tailNode = newList;
      }
    } else {
      let currentNode = this.list;
      let i = 0;
      while (i < index - 1) {
        if (currentNode.nextNode === null) {
          return 'index exceeds list length';
        }
        currentNode = currentNode.nextNode;
        i++;
      }
      if (currentNode.nextNode.nextNode === null) {
        this.tailNode = currentNode;
        currentNode.nextNode = null;
      } else {
        const splitNode = currentNode.nextNode.nextNode;
        currentNode.nextNode = splitNode;
      }
    }
    return this.list;
  }
}

class LinkedListForHashMap extends LinkedList {
  replace(key, value) {
    if (this.headNode === null) {
      return null;
    }
    let currentNode = this.list;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  get(key) {
    if (this.headNode === null) {
      return null;
    }
    let currentNode = this.list;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  valuesArray(node, arrayPopulation) {
    if (node === null) {
      return [];
    }
    let nodeValue;
    if (arrayPopulation.length > 1) {
      const arr = [];
      arrayPopulation.forEach((term) => {
        arr.push(node[`${term}`]);
      });
      nodeValue = [arr];
    } else {
      nodeValue = [node[`${arrayPopulation[0]}`]];
    }
    return nodeValue.concat(this.valuesArray(node.nextNode, arrayPopulation));
  }

  getValuesArray() {
    return this.valuesArray(this.list, ['value']);
  }

  getKeysAndValuesArray() {
    return this.valuesArray(this.list, ['key', 'value']);
  }
}

export { LinkedList, Node, LinkedListForHashMap };
