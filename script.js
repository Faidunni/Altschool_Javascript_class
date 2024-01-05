// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);

// // // console.log("Jonas");
// // // console.log(23);

// // // varaiable name conversions
// // // let firstName = "Matilda";
// // // console.log(firstName);
// // // console.log(firstName);
// // // console.log(firstName);

// // // let myFirstJob = "Coder";
// // // let myCurrentJob = "Teacher";

// // // let job1 = "programmer";
// // // let job2 = "teacher";

// // // console.log(myFirstJob);

// // // first assignment on variable
// // // let country = "Nigeria";
// // // let continent = "Africa";
// // // let population = "100billion uncountable";

// // // console.log(country);
// // // console.log(continent);
// // // console.log(population);

// // // data types
// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);

// // // console.log(typeof true);
// // console.log(typeof javascriptIsFun);
// // // console.log(typeof 23);
// // // console.log(typeof "Jonas");

// // javascriptIsFun = "Yes!";
// // console.log(typeof javascriptIsFun);

// // // undefined data type
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // // reassigning"dynamic typing" undefined value
// // year = 1991;
// // console.log(typeof year);

// // // there will be an error or bug of object,
// // console.log(typeof null);

// // // declaring variable

// // let age = 30;
// // age = 31;

// // const birthYear = 1991;
// // // birthYear = 1998;

// // // const play;

// // var job = "programmer";
// // job = "teacher";

// // middleName = "Hazeez";
// // console.log(middleName);

// // // maths operator
// // const now = 2037;
// // const ageFaizat = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageFaizat, ageSarah);

// // console.log(ageFaizat * 2, ageFaizat / 10, 2 ** 3);
// // // 2 ** 3 means 2 to the power of 3 = 2*2*2

// // const firstName = "Jonas";
// // const lastName = "Schmedtmann";
// // console.log(firstName + " " + lastName);

// // // assignments operators
// let x = 10 + 5;
// // // from the above 10 + 5 = 15, x = 15
// // x += 10;
// // // += means x + 10, which will be 15 + 10 = 25;
// // x *= 4;
// // //  this above operator means that x whixh is now 25 * 4 = 100
// x++;
// // // this operator above means that x whixh is now 100 + 1
// // x--;
// // // this operator above means that x whixh is now 100 - 1
// console.log(x);

// // // comparison operators
// // console.log(ageFaizat > ageSarah);
// // console.log(ageSarah >= 18);

// // const isFullAge = ageSarah >= 18;

// // console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageFaizat = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // let x, y;
// // x = y = 25 - 10 - 5;
// // // x = y = 10, x = 10
// // console.log(x, y);

// const averageAge = (ageFaizat + ageSarah) / 2;
// console.log(ageFaizat, ageSarah, averageAge);

// // // first assignment on variable
// const country = "Nigeria";
// const continent = "Africa";
// let population = 100000;

// console.log(country);
// console.log(continent);
// console.log(population);

// // assignment on data type
// // let isIsland = "Nigeria";
// // isIsland = true; wrong,
// let isIsland = true;
// console.log(isIsland);

// // let language; declaring empty variable

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);

// // assignment on let, const, var
// language = "English";

// // basic operators
// population = 100000 / 2;
// console.log(population);
// population++;
// console.log(population);

// const populationFinland = 6000000;
// const countryAverage = 33000000;
// console.log(population > populationFinland);
// console.log(population < countryAverage);

// // const description =
// //   "Portugal is in Europe, and its 11 million people speak portuguese"; wrong;

// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// // first coding challenge
// // const markHeight = 1.69;
// // const markWeight = 78;

// // const johnHeight = 1.95;
// // const johnWeight = 92;

// // const markBmi = markWeight / markHeight ** 2;
// // const johnBmi = johnWeight / johnHeight ** 2;
// // console.log(markBmi);
// // console.log(johnBmi);

// // console.log(markBmi > johnBmi);
// // using the other formular and second data;

// // strings and literal
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// // normal concatation with plus sign
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// // concatation using temple literal
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string.....`);

// // before templete literal adding a new line
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// // with templete strings
// console.log(`strings
// multiple
// lines`);

// // Taking decison
// // const age = 19;
// // if (age >= 18) {
// //   console.log("Sarah can start drving license🚘");
// // }

// // const myAge = 15;
// // if (myAge >= 18) {
// //   console.log("Joy can start drving license🚘");
// // } else {
// //   const yearLeft = 18 - myAge;
// //   console.log(`Joy is too yound, wait another ${yearLeft} years`);
// // }

// const yearBirth = 1998;

// let century;
// if (yearBirth <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const johnBirth = 2003;

// let generation;
// if (johnBirth <= 2000) {
//   generation = "millenmial";
// } else {
//   generation = "Gen-z";
// }
// console.log(generation);

// // second challenge
// const markMass = 95;
// const markLength = 1.88;

// const johnMass = 85;
// const johnLength = 1.76;
// const bmiMark = markMass / (markLength * markLength);
// const bmiJohn = johnMass / (johnLength * johnLength);

// console.log(bmiMark);
// console.log(bmiJohn);
// console.log(bmiMark > bmiJohn);

// let BMI;
// if (bmiMark > bmiJohn) {
//   BMI = `Mark's BMI ${26.9} is higher than John's BMI ${27.4}!`;
// } else {
//   BMI = `John's BMI ${27.4} is higher than Mark's BMI ${26.9}!`;
// }
// console.log(BMI);

// // or you just log it into the console without declaring any variable
// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

// const markBmi = markWeight / markHeight ** 2;
// const johnBmi = johnWeight / johnHeight ** 2;
// const averageBMI = markBmi > johnBmi;
// console.log(markBmi, johnBmi, averageBMI);

// if (markBmi > johnBmi) {
//   console.log(`Mark's BMI ${27.3} is higher than John's BMI ${24.1}!`);
// } else {
//   console.log(`John's BMI ${24.1} is higher than Mark's BMI ${27.3}!`);
// }

// // const princeOfDubai = "Princess Faidunni";

// // let marry;
// // let Princess;
// // if (princeOfDubai >= Princess) {
// //   marry = "don't marry anyone";
// // } else {
// //   marry = "The prince of Dubai will marry me";
// // }

// // console.log(marry); it will give a result but logically, na nonsense

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// // guess the output
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// // truthy and falsy values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// // const money = 100;
// // if (money) {
// //   console.log("Don't spend it all");
// // } else {
// //   console.log("You should get a job!");
// // }

// // let height;
// // if (height) {
// //   console.log("YAY! Height is defined");
// // } else {
// //   console.log("Height is Undefined");
// // }

// // Equality Operator
// const age = "18";
// if (age === 18) console.log("You just became an adult");

// const age = "19";
// if (age === 18) console.log("You just became an adult: D(strict)");

// if (age == 18) console.log("You just grown :D (LOOSE)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// "23" == 23 LOOSE OPERATOR
// if (favourite == 23) {
//   console.log("Cool! 23 is an amazing number!");
// }

// "23" === 23 STRICT OPERATOE
// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not ths 23?");
// const dolpinsAverage = console.log(96 + 108 + 89) / 3;
// const koalasAverage = console.log(88 + 91 + 110) / 3;
// const bothAverage = console.log(dolpinsAverage >= koalasAverage);
// const averageBoth = console.log(koalasAverage >= dolpinsAverage);
// const average = console.log(dolpinsAverage, koalasAverage)

// const minimumScore = 100;
// if (dolpinsAverage > 100) {
//   console.log("dOLPHIN'S TEAM WINS");
// }else if (koalasAverage > 100) {
//   console.log("Koalas's team win");
// } else if (average )

//boolean logic
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasDriversLicence;

// if (hasDriversLicence && hasDriversLicence) {
//   console.log("Sarah is able to driver");
// } else {
//   console.log("Someone else should driver....");
// }

const isTired = false; //c
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasDriversLicence && !isTired) {
  console.log("Sarah is able to driver");
} else {
  console.log("Someone else should driver....");
}

// coding challenge
const dolpinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolpinsAverage, koalasAverage);

if (dolpinsAverage > koalasAverage) {
  console.log("Dolphin's team wins");
} else if (koalasAverage > dolpinsAverage) {
  console.log("Koalas's team wins");
} else if (dolpinsAverage === koalasAverage) {
  console.log("Both wins the trophy!");
}

// bonus 1
const dophinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 123) / 3;
const minimumScore = 100;
console.log(dophinsScore, koalasScore);

if (dophinsScore > koalasScore && dophinsScore >= minimumScore) {
  console.log("Dolphin's team wins🏆");
} else if (koalasScore > dophinsScore && koalasScore >= minimumScore) {
  console.log("Koalas's team wins the trouphy🏆");
}

// bonus 2
const dolpins = (97 + 112 + 80) / 3;
const koalas = (109 + 95 + 50) / 3;
const minimum = 100;
console.log(dolpins, koalas);

if (dolpins > koalas && dolpins >= minimum) {
  console.log("Dolphin's team wins");
} else if (koalas > dolpins && koalas >= minimum) {
  console.log("Koalas's team wins");
} else if (dolpins === koalas && dolpins >= minimum && koalas >= minimum) {
  console.log("Both wins the trophy!");
} else {
  console.log("No one wins the trophy");
} //review the questions again

// switch statement using week day variable;

const day = "thursday";

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "saturday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// expression and statement
if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);

// conditional [Ternary] operator
const age = 15;
// ? console.log("I like to drink wine🍷")
// : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to dring ${age >= 18 ? "wine🍷" : "water 💧"}`);

//coding challenge
const bill = 430;
const tip1 = 0.15;
const tip2 = 0.2;

if (bill >= 50 && bill <= 300) {
  const tipAddition = console.log(bill * tip1);
} else {
  const tipAddition = console.log(bill * tip2);
} //using if statement

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip); //using condition tetrany

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value was ${
    bill + tip
  }`
);
