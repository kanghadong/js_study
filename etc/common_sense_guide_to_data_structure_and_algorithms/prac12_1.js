class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(10);
const root = new TreeNode(5, node1, node2);


search = (value, node) => {
  if (node === null || node.value === value) {
    return node;
  } else if (value < node.value) {
    return search(value, node.leftChild);
  } else {
    return search(value, node.rightChild);
  }
}

insert = (value, node) => {
  if (value < node.value) {
    if (node.leftChild === null) {
      node.leftChild = new TreeNode(value);
    } else {
      insert(value, node.leftChild);
    }
  } else if (value > node.value) {
    if (node.rightChild === null) {
      node.rightChild = new TreeNode(value);
    } else {
      insert(value, node.rightChild);
    }
  }
}

deleteFunc = (valueToDelete, node) => {
  if (node === null) {
    return node;
  } else if (valueToDelete < node.value) {
    node.leftChild = deleteFunc(valueToDelete, node.leftChild);

    return node;
  } else if (valueToDelete > node.value) {
    node.rightChild = deleteFunc(valueToDelete, node.rightChild);
    return node;
  } else if (valueToDelete === node.value) {
    if (node.leftChild === null) {
      return node.rightChild;
    } else if (node.rightChild === null) {
      return node.leftChild;
    } else {
      node.rightChild = lift(node.rightChild, node);
      return node;
    }
  }
};

lift = (node, nodeToDelete) => {
  if(node.leftChild) {
    node.leftChild = lift(node.leftChild, nodeToDelete);
    return node;
  } else {
    nodeToDelete.value = node.value;
    return node.rightChild;
  }
};