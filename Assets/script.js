//predetermined variables
var lowercase = ("abcdefghijklmnopqrstuvwxyz");
var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numeral = ("0123456789");
var specialchars = ("!@#$%^&*()");

//splits my predetermined string within my variable into an array, (less typing "")
lowercase = lowercase.split("")
uppercase = uppercase.split("")
numeral = numeral.split("")
specialchars = specialchars.split("")

//setting up places for user input and results to be stored
var userinputs = "";
var passwordresult = "";

//this is the function that asks the user prompts and generates the password
function generatePassword() {
  let usercharacteramount = prompt("Choose choose between 8 and 128 for password length") //asking the user for password length

    //checking that the user input a valid password length
    if (usercharacteramount > 7 && usercharacteramount < 129){     

      //asking the user to define which character types to use
      let userlowercase = prompt("Answer yes or no, would you like to include lowercase in your password?")
      let useruppercase = prompt("Answer yes or no, would you like to include uppercase in your password?") 
      let usernumeral = prompt("Answer yes or no, would you like to include numbers in your password?")
      let userspecialchars = prompt("Answer yes or no, would you like to include special characters in your password?")

        //checking the user input at least one character type and alerting them if none were chosen
        if (userlowercase !== "yes" && useruppercase !== "yes" && usernumeral !== "yes" && userspecialchars !== "yes"){
          alert("please choose at least one character type for password generation")

          //checking which character types to use based on user input above and adding it to a variable called userinput
        } else {
            if (userlowercase.toLowerCase() == "yes"){    
              userinputs = lowercase;
            }
            if (useruppercase.toLowerCase() == "yes"){
              userinputs = userinputs.concat(uppercase)
            }
            if (usernumeral.toLowerCase() == "yes"){
              userinputs = userinputs.concat(numeral)
            }
            if (userspecialchars.toLowerCase() == "yes"){
              userinputs = userinputs.concat(specialchars)
            }

            //chooses value randomly from userinput variable created above, and does that however many times as the user asked
            for (let i = 0; i <= usercharacteramount - 1; i++){
              passwordresult = passwordresult + userinputs[Math.floor(Math.random() * userinputs.length)]
            }

            //this is a test for the developer to see the result in console.
            console.log(passwordresult)
        }

        //tells the user they entered an invalid length
      } else { 
          alert("please enter at a number between 8 and 128")
        }
        
//returns the password result to be used elsewhere
return passwordresult;
}

//Assignment Code, this defines the part of the html that will be considered a variable in java
var generateBtn = document.querySelector("#generate");

//this tells java to listend for when the variable is clicked, and that it should run the generatePassword function
generateBtn.addEventListener("click", generatePassword);

//this tells java to listen for when the variable is clicked, and that it should run the writePassword function
generateBtn.addEventListener("click", writePassword);

//This writes my passwrod to the screen
function writePassword() {
  let userPassword = document.querySelector("#password");
  userPassword.value = passwordresult;
  alert("please refresh the page before generating another password")
}


