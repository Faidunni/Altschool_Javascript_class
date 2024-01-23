const person = {
  name: "John",
  age: 30,
  location: "FL",
};

console.log(person.name);
person;

function add(x, y) {
  return x + y;
}

console.log(add(4, 5));

// array
const nums = [11, 30, 22, 9, 14];

const sum = nums.reduce((acc, cur) => acc + cur);
const over = nums.filter((num) => num > 20);

function Name(name) {
  this.name = name;
  return name;
}

const name = new Name("Faizat");
