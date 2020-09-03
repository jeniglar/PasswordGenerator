// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generate function 
function generatePassword() {

  // Character arrays

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var all = uppercase.concat(lowercase, number, special);
  var upperLower = uppercase.concat(lowercase);
  var upperNumber = uppercase.concat(number);
  var upperSpecial = uppercase.concat(special);
  var lowerNumber = lowercase.concat(number);
  var lowerSpecial = lowercase.concat(special);
  var numberSpecial = number.concat(special);
  var upperLowerNumber = uppercase.concat(lowercase, number);
  var upperLowerSpecial = uppercase.concat(lowercase, special);
  var upperNumberSpecial = uppercase.concat(number, special);
  var lowerNumberSpecial = lowercase.concat(number, special);
  var userLower;
  var userUpper;
  var userNumber;
  var userSpecial;

  //Prompts, Confirms, Alerts

  var howMany = parseInt(prompt("How many characters would you like your password to contain?"));
  if ((howMany > 7) && (howMany < 129)) {
    userLower = confirm("Click OK if you would like to include lowercase characters");
    userUpper = confirm("Click OK if you would like to include uppercase characters");
    userNumber = confirm("Click OK if you would like to include numeric characters");
    userSpecial = confirm("Click OK if you would like to include special characters");
  } else {
    alert("Password length must be a number between 8 and 128");
  } while (!userLower && !userUpper && !userNumber && !userSpecial) {
    alert("Password must contain at least one character type");
    break;
  }

  var password = "";

  //lowercase
  if (userLower && !userUpper && !userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += lowercase[Math.floor(Math.random() * lowercase.length)]
    }
  }
  //uppercase
  else if (!userLower && userUpper && !userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += uppercase[Math.floor(Math.random() * uppercase.length)]
    }
  }
  //number
  else if (!userLower && !userUpper && userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += number[Math.floor(Math.random() * number.length)]
    }
  }
  //special
  else if (!userLower && !userUpper && !userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += special[Math.floor(Math.random() * special.length)]
    }
  }
  //all
  else if (userLower && userUpper && userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += all[Math.floor(Math.random() * all.length)]
    }
  }
  //upperlower
  else if (userLower && userUpper && !userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperLower[Math.floor(Math.random() * upperLower.length)]
    }
  }
  //uppernumber
  else if (!userLower && userUpper && userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperNumber[Math.floor(Math.random() * upperNumber.length)]
    }
  }
  //upperspecial
  else if (!userLower && userUpper && !userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperSpecial[Math.floor(Math.random() * upperSpecial.length)]
    }
  }
  //lowernumber
  else if (userLower && !userUpper && userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += lowerNumber[Math.floor(Math.random() * lowerNumber.length)]
    }
  }
  //lowerspecial
  else if (userLower && !userUpper && !userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)]
    }
  }
  //numberspecial
  else if (!userLower && !userUpper && userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += numberSpecial[Math.floor(Math.random() * numberSpecial.length)]
    }
  }
  //upperlowernumber
  else if (userLower && userUpper && userNumber && !userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperLowerNumber[Math.floor(Math.random() * upperLowerNumber.length)]
    }
  }
  //upperlowerspecial
  else if (userLower && userUpper && !userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperLowerSpecial[Math.floor(Math.random() * upperLowerSpecial.length)]
    }
  }
  //uppernumberspecial
  else if (!userLower && userUpper && userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += upperNumberSpecial[Math.floor(Math.random() * upperNumberSpecial.length)]
    }
  }
  //lowernumberspecial
  else if (userLower && !userUpper && userNumber && userSpecial) {
    for (var i = 0; i < howMany; i++) {
      password += lowerNumberSpecial[Math.floor(Math.random() * lowerNumberSpecial.length)]
    }
  }

  return password
}
