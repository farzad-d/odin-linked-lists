class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.node = null; // head
  }

  // Utility methods --------------------------------------------------

  isEmpty() {
    return this.node === null;
  }

  size() {
    let count = 0;
    let current = this.node;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.node?.value ?? null;
  }

  tail() {
    if (!this.node) return null;

    let current = this.node;
    while (current.nextNode) current = current.nextNode;
    return current.value;
  }

  at(index) {
    if (index < 0) throw new Error("Index cannot be negative.");

    let current = this.node;
    let i = 0;

    while (current) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }

    throw new Error("Index out of range.");
  }

  // Insertion methods --------------------------------------------------

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.node = newNode;
      return;
    }

    let current = this.node;
    while (current.nextNode) current = current.nextNode;

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.node;
    this.node = newNode;
  }

  insertAt(value, index) {
    if (index < 0) throw new Error("Index cannot be negative.");
    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.node;
      this.node = newNode;
      return;
    }

    let prev = this.at(index - 1);
    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
  }

  // Removal methods --------------------------------------------------

  pop() {
    if (this.isEmpty()) return null;

    if (!this.node.nextNode) {
      const value = this.node.value;
      this.node = null;
      return value;
    }

    let current = this.node;
    while (current.nextNode.nextNode) current = current.nextNode;

    const value = current.nextNode.value;
    current.nextNode = null;
    return value;
  }

  removeAt(index) {
    if (index < 0) throw new Error("Index cannot be negative.");
    if (this.isEmpty()) throw new Error("List is empty.");

    if (index === 0) {
      this.node = this.node.nextNode;
      return;
    }

    const prev = this.at(index - 1);
    if (!prev.nextNode) throw new Error("Index out of range.");
    prev.nextNode = prev.nextNode.nextNode;
  }

  // Search methods --------------------------------------------------

  contains(value) {
    let current = this.node;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let i = 0;
    let current = this.node;
    while (current) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++;
    }
    return null;
  }

  // Display --------------------------------------------------

  toString() {
    if (this.isEmpty()) return "null";

    let current = this.node;
    let str = "";

    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return str + "null";
  }
}

export default LinkedList;
