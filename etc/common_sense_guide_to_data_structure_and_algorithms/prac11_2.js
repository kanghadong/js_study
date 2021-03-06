class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }
}

const node1 = new Node('once');
const node2 = new Node('upon');
const node3 = new Node('a');
const node4 = new Node('time'); 

node1.setNextNode(node2);
node2.setNextNode(node3);
node3.setNextNode(node4);

const linkedList = new LinkedList(node1);

