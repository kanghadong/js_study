class Node {
  constructor(data) {
    this.data = data;
    this.prevNode = null;
    this.nextNode = null;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getPrevNode() {
    return this.prevNode;
  }

  setPrevNode(prevNode) {
    this.prevNode = prevNode;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

class DoublyLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (this.firstNode === null) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.setPrevNode(this.lastNode);
      this.lastNode.setNextNode(newNode);
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    const removedNode = this.firstNode;
    this.firstNode = this.firstNode.getNextNode();
    return removedNode;
  }
}

class Queue {
  constructor() {
    this.queue = new DoublyLinkedList();
  }

  enque(value) {
    this.queue.insertAtEnd(value);
  }

  deque() {
    removedNode = this.queue.removeFromFront();
    return removedNode.getData();
  }

  tail() {
    return this.queue.lastNode.getData();
  }
}