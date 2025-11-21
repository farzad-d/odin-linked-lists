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
    while (current.nextNode) current = current.nextNode;
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.node) {
      this.node = newNode;
      return;
    }

    newNode.nextNode = this.node;
    this.node = newNode;
  }

  size() {
    if (!this.node) throw new Error("List is empty.");

    let counter = 0;
    let current = this.node;

    while (current) {
      current = current.nextNode;
      counter++;
    }

    return counter;
  }

  head() {
    return this.node && this.node.value;
  }

  tail() {
    let current = this.node;
    while (current.nextNode) current = current.nextNode;
    return current.value;
  }

  at(index) {
    if (index < 0) throw new Error("Index cannot be negative.");
    if (!this.node) throw new Error("List is empty.");

    let current = this.node;

    for (let i = 0; i < index; i++) {
      if (!current) throw new Error("Index is out of range.");
      current = current.nextNode;
    }

    return current;
  }

  // pop() {}
  // contains(value) {}
  // find(value) {}

  toString() {
    if (!this.node) return "null";

    let current = this.node;
    let str = "";

    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    str += "null";
    return str;
  }

  // insertAt(value, index) {}
  // removeAt(index) {}
}

export default LinkedList;
