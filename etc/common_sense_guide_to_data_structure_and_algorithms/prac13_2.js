class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
    this.visited = false;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  displayNetwork() {
    let toReset = [this];
    let queue = [this];
    this.visited = true;

    while (queue.length > 0) {
      let currentVertex = queue.shift();

      currentVertex.friends.forEach(friend => {
        toReset.push(friend);
        queue.push(friend);
        friend.visited = true;
      });
    }

    toReset.forEach(node => {
      node.visited = true;
    });
  }
}