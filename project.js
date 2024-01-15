// prompt("What is your username?");
function displayUserDetails() {
  let userName = prompt("What is your username?");

  while (validateUsername(userName) === false) {
    userName = prompt(
      "Username is not valid, enter a valid username with just 10characharacters"
    );
  }

  if (userName === null) {
    return;
  }

  let password = prompt("Enter your password");
  // validatepassword(password);

  while (!validatepassword(password) === false) {
    password = prompt("Incorrect password");
  }

  if (password === null) {
    return;
  }

  console.log(userName, password);
}

displayUserDetails();
alert("You have come to the end of the program, good bye");
// to store the details put it in a variable
// let userName = prompt("What is your username?"); //get and store username
// console.log(userName);
// validateUsername(userName); //validate the username

// let password = prompt("Enter your password");
// validatepassword(password);

// alert("You have come to the end of the program, good bye");
// validate the username
function validateUsername(userName) {
  if (userName === null) {
    return false;
  }
  if (userName.length > 10) {
    return false;
  } else {
    return true;
  }
}

// password
function validatepassword(password) {
  if (password === null) {
    return false;
  }

  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
