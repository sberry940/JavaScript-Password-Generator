// Assignment code here
 var characterLength = 12;
 var choiceArr = [];

 var specialCharArr = ['!','?','@','#','$','%'];
 var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var numberArr = ['0','1','2','3','4','5','6','7','8','9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //returns true or false
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = '';
  }
}

//Generate a password based on prompt criteria
function generatePassword() {
  var password = '';
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

//Generate a password according to prompt
function getPrompts() {
  //resets the choiceArr
  choiceArr = [];

  //prompt and value for password length
  characterLength = parseInt(prompt('How many characters would you like your password to be? Password must be 12-128 characters.'));

  if(isNaN(characterLength) || characterLength < 12 || characterLength > 128) {
    alert('Character length is invalid');
    return false;
  }
  //Prompt for lower case values in password
if (confirm('Would you like lowercase characters in your password?')){
  choiceArr = choiceArr.concat(lowerCaseArr);
}

//Prompt for upper case values in password
if (confirm('Would you like uppercase characters in your password?')){
  choiceArr = choiceArr.concat(upperCaseArr);
}

//prompt for specual characters in password
if (confirm('Would you like special characters in your password?')){
  choiceArr = choiceArr.concat(specialCharArr);
}

//prompt for numeric values in password
if (confirm('Would you like numeric characters in your password?')){
  choiceArr = choiceArr.concat(numberArr);
}
return true;
}



