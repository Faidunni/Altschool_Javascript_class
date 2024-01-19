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
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// calcAge1(1991);
// console.log(calcAge1(1991));

// // or
// const age1 = calcAge1(1991);
// console.log(age1);

// function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   return `${firstName} retires in ${retirment}`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

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

const calaAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsretirement = function (birthYear, firstname) {
  const age = calaAge(birthYear);
  const retireMent = 65 - age;

  if (retireMent === 0) {
    console.log(`${firstname} retires in ${retireMent} years`);
    return retireMent;
  } else {
    console.log(`${firstname} has already retired`);
    return -1;
  }
};

const retirementYears = yearsretirement(1991, "Mike");
console.log(retirementYears);

// coding Challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinsAverage, koalasAverage);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin team won with ${avgdolphins} vs ${avgkoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won with ${avgkoalas} vs ${avgdolphins}`);
  } else {
    console.log("No team won");
  }
};

checkWinner(dolphinsAverage, koalasAverage);

// ARRAYS
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmed", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const y = new Array(1991, 1984, 1776);
// console.log(y);

// array exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2012, 2010];
console.log(calcAge(years)); //this will produce not a number

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age4);

const ages = [
  calaAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
