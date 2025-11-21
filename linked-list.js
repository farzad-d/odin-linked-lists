class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.node = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.node) {
      this.node = newNode;
      return;
    }

    let current = this.node;
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  // prepend(value) {}

  size() {
    if (!this.node) return;

    let size = 1;
    let current = this.node;

    while (current.nextNode) {
      current = current.nextNode;
      size++;
    }

    return size;
  }

  head() {
    return this.node && this.node.value;
  }

  tail() {
    let current = this.node;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }
  at(index) {
    if (!this.node) return;

    let current = this.node;

    for (let i = 1; i <= index; i++) {
      if (!current.nextNode) return "Out of range!";
      current = current.nextNode;
    }

    return current.value;
  }

  // pop() {}
  // contains(value) {}
  // find(value) {}

  toString() {
    if (!this.node) return;

    let str = "";
    let current = this.node;
    str = `( ${current.value} ) -> `;

    while (current.nextNode) {
      str += `( ${current.nextNode.value} ) -> `;
      current = current.nextNode;
    }
    str += current.nextNode;

    return str;
  }

  // insertAt(value, index) {}
  // removeAt(index) {}
}

export default LinkedList;
