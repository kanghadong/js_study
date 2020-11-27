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

  indexOf(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while(currentNode !== null) {
      if (currentNode.getData() === value) {
        return currentIndex;
      } else {
        currentNode = currentNode.getNextNode();
        currentIndex+=1;
      }
    }
    
    return null;
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

console.log(linkedList.indexOf('once'));
console.log(linkedList.indexOf('upon'));
console.log(linkedList.indexOf('a'));
console.log(linkedList.indexOf('time'));
console.log(linkedList.indexOf('target'));