
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeral = ("0123456789");
var specialchars = ("!@#$%^&*()");

var userinputs;
var passwordresult = "";

lowercase = lowercase.split("")
uppercase = uppercase.split("")
numeral = numeral.split("")
specialchars = specialchars.split("")


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let usercharacteramount = prompt("Choose choose between 8 and 128 for password length")
    if (usercharacteramount > 7 && usercharacteramount < 129){
      let userlowercase = prompt("would you like to include lowercase in your password?")
      let useruppercase = prompt("would you like to include uppercase in your password?") 
      let usernumeral = prompt("would you like to include numbers in your password?")
      let userspecialchars = prompt("would you like to include special characters in your password?")
        if (userlowercase !== "yes" && useruppercase !== "yes" && usernumeral !== "yes" && userspecialchars !== "yes"){
          alert("please choose at least one character type for password generation")
        } else {
            if (userlowercase.toLowerCase() == "yes"){
              userinputs = lowercase;
            }
            if (useruppercase.toLowerCase() == "yes"){
              userinputs = userinputs.concat(uppercase)
            }
            if (usernumeral.toLowerCase() == "yes"){
              userinputs = userinputs.concat(usernumeral)
            }
            if (userspecialchars.toLowerCase() == "yes"){
              userinputs = userinputs.concat(userspecialchars)
            }

            for (let i = 0; i <= usercharacteramount; i++){
              passwordresult = passwordresult + userinputs[Math.floor(Math.random() * userinputs.length)]
            }
            console.log(passwordresult)
        }
      } else { 
          alert("please enter at a number between 8 and 128")
        }
          

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
