class Person {

  constructor(name) {
    this.name = name;
  }

  greet(target) {
    return `Hello ${target}, my name is ${this.name}`;
  }
}

const joe = new Person('Joe');
console.log(joe.greet('Kate'));
console.log(joe.name);