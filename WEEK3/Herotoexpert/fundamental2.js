"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// function
function logger() {
  console.log("My name is Jonas");
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessors(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcessors(5, 0);
const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);
console.log(fruitProcessors(5, 0));

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);

console.log(fruitProcessors(2, 4));

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

calcAge1(1991);
console.log(calcAge1(1991));

// or
const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

// Arrow function
