class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  getNextNode() {
    return this.nextNode;
  }

  getData() {
    return this.data;
  }
}

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while(currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex+=1;
    }

    if (currentNode) {
      return currentNode.getData();
    } else {
      return null;
    }
  }

  deleteAtIndex(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while(currentIndex < (index - 1)) {
      currentNode = currentNode.getNextNode();
      currentIndex+=1;
    }

    const nodeAfterDeleteNode = currentNode.getNextNode().getNextNode();
    currentNode.setNextNode(nodeAfterDeleteNode);
  }
}

const node1 = new Node('once');
const node2 = new Node('upon');
const node3 = new Node('a');
const node4 = new Node('good');
const node5 = new Node('time'); 

node1.setNextNode(node2);
node2.setNextNode(node3);
node3.setNextNode(node4);
node4.setNextNode(node5);

const linkedList = new LinkedList(node1);

linkedList.deleteAtIndex(3);

console.log(linkedList.read(0));
console.log(linkedList.read(1));
console.log(linkedList.read(2));
console.log(linkedList.read(3));