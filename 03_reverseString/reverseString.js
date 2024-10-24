let reversedStringCharacters;

function reverseString(string) {
    reversedStringCharacters = ""
     let stringCharacters =  string.split("");
     for(let i = 0; i < string.length; i++){
        reversedStringCharacters += stringCharacters.pop();
     }
     console.log(reversedStringCharacters);
     return reversedStringCharacters;
}

// Do not edit below this line
module.exports = reverseString;
