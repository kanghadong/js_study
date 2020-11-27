class Person {
  constructor(name, friends) {
    this.name = name;
    this.friends = friends;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}

const mary = new Person('Mary');
const peter = new Person('Peter');

mary.addFriend(peter);
peter.addFriend(mary);