let result

const sumAll = function(startNumber, endNumber){
    result = 0;
    let checkIfInteger = startNumber.toString() + endNumber.toString()
    console.log(checkIfInteger);
    if(checkIfInteger.includes(".") || checkIfInteger.includes(",")){
        return "ERROR"
    } else if ((typeof startNumber) === "number" && (typeof endNumber) === "number") {
        if(startNumber >= 0 && endNumber >= 0){
            if(startNumber < endNumber){
                for(i = startNumber; i <= endNumber; i++){
                    result += i;
                }
                return result;
            } else if(startNumber > endNumber){
                for(i = startNumber; i>= endNumber; i--){
                    result += i;
                }
                return result;
            } else if (startNumber == endNumber){
                return startNumber + endNumber;
            }
        } else {return "ERROR";}
    } else {return "ERROR";}
} 

// determining if number is integer or not:
// make the variable a string;
// search string for a decimal point;
// if true, proceed with the function, else, return error

// console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
