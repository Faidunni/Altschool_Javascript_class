let names = ["Judith", "Olumide"];

let capitalizedNames = names.map(capitalize);

let upperCasedNames = names.map((name) => name.toUpperCase());
console.log(upperCasedNames);

// to capitalize
function capitalize(str) {
  let firstLetter = str[0];
  let rest = str.slice(1);
  return `${firstLetter.toUpperCase()}${rest.toLowerCase()}`;
}

console.log(capitalize("judith"));

// arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry", "durian", "eggfruit", "apple"];
const double = (x) => x * x;
const add5 = (x) => x + 5;

let result = numbers.map(double);
console.log(result);

let result1 = numbers.map(add5);
console.log(result1);

let result2 = numbers.map(double).map(add5);
console.log(result2);

// const the friuts
const callfunction = (prev, curr, currindex, array) => {
  console.log(prev, curr, currindex, array);
  prev[curr];
  if (prev[curr]) {
    prev[curr] += 1;
  } else {
    prev[curr] = 1;
  }

  console.log(prev);
  return prev;
};

let count = fruits.reduce(callfunction, {});
