
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeral = ("0123456789");
var specialchars = ("!@#$%^&*()");

lowercase.split("")
uppercase.split("")
numeral.split("")
specialchars.split("")



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let characteramount = prompt("Choose choose between 8 and 128 for password length")

    if (characteramount > 7 && characteramount < 129){
      let charactertype = prompt("please enter character types of " + "lowercase " + "uppercase " + "numeral " + "special")
        if charactertype = ("lowercase" || "uppercase" || "numeral" || "special") { 
          let specialchars = prompt("please enter special characters")
            var pass = (false);
            for(iteration = 0, iteration < specialchars.length() - 1, iteration++){
              if (specialchars[iteration] == characteramount){
              pass = true 
              break
              }
            }
            if (pass = true){
              console.log.("it worked")
            } else {
              console.log("failed")
            }
        }
      else { prompt("please enter a valid character type")
      }
    } else {alert("please restart and choose a valid integer between 8 and 128")
      }
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
