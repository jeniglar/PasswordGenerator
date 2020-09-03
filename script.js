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


// Character arrays below

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var allCharacters = uppercase.concat(lowercase, number, special);

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

