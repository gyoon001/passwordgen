// Assignment code here
var password = [];

// characters in respective designations
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar= "abcdefghijklmnopqrstuvwxyz";
var specialChar = "@!#$%^&*()+-./:;<=>?[]\^_'{}|~";
var numberChar = "123456789";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  charCountInput = parseInt(prompt("How many characters would you like in your password? 8 to 128"));
  if (!charCountInput){
    alert("You must input how many characters you want your password to be."); //incase user does not input value 
  } else if (charCountInput < 8 || charCountInput > 128) {
    charCountInput = parseInt(prompt("The value must be between 8 to 128")); //incase user does not input value 8-128
  } else {

    //confirms for pw criteria
    var confirmlowerChar = confirm("Do you want lowercase characters in your password?");
    var confirmupperChar = confirm("Do you want UPPERCASE characters in your password?");
    var confirmnumberChar = confirm("Do you want numbers in your password?");
    var confirmspecialChar = confirm("Do you want special characters (!@#$%^& etc) in your password?");

  };

  //logic tree/combinations for user input
if (confirmlowerChar && confirmnumberChar && confirmupperChar && confirmspecialChar) {
  var pwGen = upperChar.concat(lowerChar, numberChar, specialChar)
} else if (!confirmlowerChar && !confirmnumberChar && !confirmupperChar && !confirmspecialChar) {
  alert("Select password criteria");
} else if (confirmlowerChar && confirmnumberChar && confirmupperChar && !confirmspecialChar) {
  pwGen = lowerChar.concat(numberChar, upperChar);
} else if (confirmlowerChar && confirmnumberChar && !confirmupperChar && confirmspecialChar) {
  pwGen = lowerChar.concat(numberChar, specialChar);
} else if (confirmlowerChar && !confirmnumberChar && confirmupperChar && confirmspecialChar) {
  pwGen = lowerChar.concat(upperChar, specialChar);
} else if (confirmlowerChar) {
  pwGen = lowerChar;
}
  else if (!confirmlowerChar && confirmnumberChar && confirmupperChar && confirmspecialChar) {
  pwGen = numberChar.concat(upperChar, specialChar)
} else if (!confirmlowerChar && confirmnumberChar && !confirmupperChar && confirmspecialChar) {
  pwGen = numberChar.concat(specialChar);
} else if (!confirmlowerChar && confirmnumberChar && confirmupperChar && !confirmspecialChar) {
  pwGen = numberChar.concat(upperChar)
} else if (numberChar) {
  pwGen = numberChar
}

else if (!confirmlowerChar && !confirmnumberChar && confirmupperChar && confirmspecialChar) {
  pwGen = upperChar.concat(specialChar)
} else if (confirmlowerChar && !confirmnumberChar && confirmupperChar && !confirmspecialChar) {
pwGen = upperChar.concat(lowerChar)
} else if (upperChar) {
  pwGen = upperChar
}

else if (confirmspecialChar) {
  pwGen = specialChar
}

//randomly choosing characters
for (var i = 0; i < charCountInput; i++) {
  var passwordString = pwGen[Math.floor(Math.random() * pwGen.length)];
  password.push(passwordString);
  document.getElementByID("password").textContent = passwordString; //pushing into the page - this didn't work and i got stumped, should have asked for help
};

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
