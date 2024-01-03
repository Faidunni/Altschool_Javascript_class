// if statement
// let day = "tuesday";

// if (day == "monday") alert("Today is monday");

// if (day == "tuesday") {
//   alert("Today is tuesday");
// }

// if else
let size = 25;
if (size == 20) {
  alert("size is available");
  alert("Thank you");
} else {
  alert("The size is not available");
}

// if-else if
let day = "wednesday";

if (day == "monday") {
  alert("Today is Monday");
} else if (day == "tuesday") {
  alert("Today is Tuesday");
} else if (day == "wednesday") {
  alert("Today is Wednesday");
} else if (day == "thursday") {
  alert("Today is Thursday");
} else {
  alert("Today is neither monday, Tuesday, wednesday or thursday");
}

// Ternary operation or conditional operator(?) and they containof three values, unary operates on one value e.g increaement value, the binary operator works on two values e.g +,

let age = 29;

let conVote = age > 18 ? true : false;
console.log(conVote);

// switch statement can replace multiple if checks. It gives a cleaner way of comporing values with multiple variants
let month = "January";
switch (month) {
  case "January":
    console.log("Today is January");
    break;

  case "Febuary":
    console.log("Today is Febuary");
    break;

  case "March":
    console.log("Today is March");
    break;

  case "April":
    console.log("Today is April");
    break;

  default:
    console.log("Not any of the months listed");
    break;
}
