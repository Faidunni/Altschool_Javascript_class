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
    console.log(`Dolphin team won with ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won with ${avgKoalas} vs ${avgDolphins}`);
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

// Array methods
const friends = ["Michael", "Steven", "Peter"];

// add element to the start of the array
friends.push("Jay");
console.log(friends);

// add element to the beginning of the array
friends.unshift("John");
console.log(friends);

// removes the last elemn=ent of an array
friends.pop();
console.log(friends);
const popped = friends.pop();
console.log(popped);

// removes the first element in array
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  console.log("Peter who?");
}

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("Steven who?");
}

// Challenge
const calcTips = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
};

const bills = [125, 555, 44];

const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Introduction to Object

// reviewing arrays
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1993,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

console.log(jonasArray);

// object
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  bigCity: "New York",
  smallCity: "Ibadan",
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const cityKey = "City";
console.log(jonas["big" + cityKey]);
console.log(jonas["small" + cityKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// challenge
//Jonas has 3 friends, and his best friend is called Michael
console.log(
  `${jonas.firstName} has ${friends.length} and his best friend is ${friends[0]}`
); //my solution which was correct, feel proud

console.log(
  `${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`
); //his solution
