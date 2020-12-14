// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button is this where I put onclick?
generateBtn.addEventListener("click", writePassword);


 
//variables for each character catagory
var numberChar = [1,2,3,4,5,6,7,8,9];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolCase =[ "!","@","#","$","%","^","&","*","<","~"];
//list of variables
var passLength; 
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSym;
function generatePassword() { 
 var passLength = prompt("How many charaters long would you like your password to be? It Cannot be less than 8 and not more than 128 in character length.");
  passLength = parseInt(passLength); 

  // my attempt at writing a contditional loop for if they choose a number outside of the range
  while (passLength > 128 || passLength < 8) {
  var passLength = prompt("Your password needs to be more than 8 and less than 128 characters long. Please enter your character length again");
  var passLength = parseInt(passLength);
  }



  //List of variables and their prompt for input except for passlength
  var confirmUpper=confirm("Would you like Uppercase letters in your password? Recommended as best practices");
  var confirmLower=confrim("Would you like Lowercase letters in your password?");
  var confirmNum=confirm("Would you like numbers in your password? Recommended as best practice");
  var confirmSym=confirm("Would you like symbols such as !,@,#,$,%,^,&, and ? Recommended a best practice.");
 //if they don't confirm any of the choices for password
  while (confirmUpper === false && confirmLower === false && confirmNum === false && confirmSym === false) {
    alert("You must choose a minimum of one attribute.");
    var confirmUpper=confirm("Would you like Uppercase letters in your password? Recommended as best practices");
    var confirmLower=confrim("Would you like Lowercase letters in your password?");
    var confirmNum=confirm("Would you like numbers in your password? Recommended as best practice");
    var confirmSym=confirm("Would you like symbols such as !,@,#,$,%,^,&, and ? Recommended a best practice");
   };
  };
//prompt input generator for password length  

//conditional if the password character lenght is not between 8-128
 
  

 // } /*can I add to this to make it go back to the original quesiton*/


 /* I want it to continue to hold the value of the passLength number and use it in the next funciton*/
// create a loop to go back to original character # question




// if uppercharacter is confirmed true
console.log(passLength);
console.log(confirmUpper);
console.log(confirmNum);
console.log(confirmSym);






// block of code if 128<passLength<8 

