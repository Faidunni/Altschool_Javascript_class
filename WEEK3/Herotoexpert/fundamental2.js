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

// function fruitProcessors(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// fruitProcessors(5, 0);
// const appleJuice = fruitProcessors(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessors(5, 0));

// const appleOrangeJuice = fruitProcessors(2, 4);
// console.log(appleOrangeJuice);

// console.log(fruitProcessors(2, 4));

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
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  // return retirment;
  return `${firstName} retires in ${retirment}`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// FUNCTION CALLING FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessors(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessors(2, 3));

// function cutFruitPieces(apples, oranges) {
//   return apples * 4, oranges * 4;
// }

// function fruitProcessors(apples, oranges) {
//   const applePieces = cutFruitPieces(apples, oranges);
//   // const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and orange`;
//   return juice;
// }

// console.log(fruitProcessors(4, 5));good logical thinking but you will only get one answer, instead of two

const calaAge = function
