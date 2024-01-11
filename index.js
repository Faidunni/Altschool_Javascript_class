// if statement
// let day = "tuesday";

// if (day == "monday") alert("Today is monday");

// if (day == "tuesday") {
//   alert("Today is tuesday");
// }

// if else
// let size = 25;
// if (size == 20) {
//   alert("size is available");
//   alert("Thank you");
// } else {
//   alert("The size is not available");
// }

// if-else if
// let day = "wednesday";

// if (day == "monday") {
//   alert("Today is Monday");
// } else if (day == "tuesday") {
//   alert("Today is Tuesday");
// } else if (day == "wednesday") {
//   alert("Today is Wednesday");
// } else if (day == "thursday") {
//   alert("Today is Thursday");
// } else {
//   alert("Today is neither monday, Tuesday, wednesday or thursday");
// }

// Ternary operation or conditional operator(?) and they containof three values, unary operates on one value e.g increaement value, the binary operator works on two values e.g +,

// let age = 29;

// let conVote = age > 18 ? true : false;
// console.log(conVote);

// switch statement can replace multiple if checks. It gives a cleaner way of comporing values with multiple variants
// let month = "January";
// switch (month) {
//   case "January":
//     console.log("Today is January");
//     break;

//   case "Febuary":
//     console.log("Today is Febuary");
//     break;

//   case "March":
//     console.log("Today is March");
//     break;

//   case "April":
//     console.log("Today is April");
//     break;

//   default:
//     console.log("Not any of the months listed");
//     break;
// }

//Loops: these are used to perform repeated actions based on a condition in Javascript

// while loop
// let i = 0;

// while (i < 10) {
//   //shows 0, then 1, 2,3
//   console.log(i);
//   i++; //with this increment statement, the code will kep running till infinity
// }

// do while loop

// let j = 5;

// do {
//   console.log(j);
//   j++;
// } while (j < 3);

// let k = 3;

// do {
//   console.log(k);
//   k++;
// } while (k < 3);

// loops (for); there are basically three parts;initialization part, conditional part and increment part
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
//   console.log("is is now: ", i);
// }

// loop (for of) this is use to emurate over in iterables like strings, arrays, map and a set
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log("value is : ", value);
}

const firstName = "Johnson";
for (const char of firstName) {
  console.log("Character is: ", char);
}

// loop(for in) this is use to emurate over properties of an object that are keyed by string
// const user = {
//   name: "john",
//   age: 20,
//   city: "Lagos",
// };

// for (const key in user) {
//   // console.log(key);
//   console.log(`The key is: ${key} and the value is ${user[key]}`);
// }

// // FUNCTIONS
// function sum() {
//   let result = 20 + 13;
//   console.log(`The result is ${result}`);
// }

// sum();

// function variable
// let count = 0;
// let middleName = "John";

// function that has no parameters
// function addToCount() {
//   let localCount = 2;

// count = count + 1; //adding to global variable count
// localCount = localCount + 1;

// console.log("Count is: ", count);
// console.log(middleName);
// console.log("Local count is: ", localCount);
// }

// addToCount();
// addToCount();

// function with parameter
// function displayName(otherName, lastName, age, height) {
//   alert(otherName + " " + lastName + " " + age + " " + height);
// }

// displayName("John", " Doe", 25, 179);
// displayName("Ade", "Johnson", 19, 143);

// to set default value for a parameter that does not have a value

// function displayName(otherName = "", lastName = "", age = 18, height = 150) {
//   alert(otherName + " " + lastName + " " + age + " " + height);
// }

// displayName("Azeez", "Muhammed");

// function with return
// function getFullname(firstname = "", lastname = "") {
//   const fullName = firstname + " " + lastname;
//   return fullName;
// }

// let fullName1 = getFullname("Faizah", "Hazeez");
// let fullName2 = getFullname("Faida", "Hazeez");
// alert(fullName1);
// alert(fullName2);

// function addsTwoNumber(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const result = addsTwoNumber(20, 30);
// console.log(result);

// function with condition
// function performMathOperation(number1, number2, operationtype) {
//   if (operationtype === "add") {
//     const result = number1 + number2;
//     return result;
//   } else if (operationtype === "sub") {
//     const result = number1 - number2;
//     return result;
//   } else {
//     alert("Operation is not supported");
//   }

//   alert("End of function");
// }

// const sumResult = performMathOperation(20, 30, "add");
// console.log(sumResult);

// const subResult = performMathOperation(50, 20, "sub");
// console.log(subResult);

// // function expression
// const sayHello = function () {
//   alert("Hello World");
// };

// sayHello();

// callback functions
function displayUser(displayType, showFullname, showUsername) {
  if (displayType === "full") {
    showFullname();
  } else {
    showUsername();
  }
}

function showFullname() {
  alert("John Doe");
}

function showUsername() {
  alert("JohnDoe24");
}

displayUser("no", showFullname, showUsername);

// arrow function
