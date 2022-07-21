
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numberic = ("0123456789");
var specialchars = ("!@#$%^&*()");
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let characteramount = prompt("Choose choose between 8 and 128 for password length")
    if (characteramount > 7 && characteramount < 129){let charactertype = prompt("please choose character types of lowercase, uppercase, numeric, special")
    } else if (characteramount < 8 || characteramount > 128){let characteramount = alert("please restart and choose a valid integer between 8 and 128")}
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
