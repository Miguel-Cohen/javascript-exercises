const repeatString = function(string, numberOfTimes) {
    if(numberOfTimes > 0){
        const stringArray = new Array(string)
            for(i = 1; i < numberOfTimes; i++){
            stringArray.push(string)
            }
        return stringArray.join("");
    } else if (numberOfTimes === 0){
        return "";
    } else {
        return "ERROR"
    }
};

repeatString("hey", 3)
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
