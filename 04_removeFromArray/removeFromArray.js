// initial array index of items for be removed
// while items continue to be found
// array.splice remove index found above

// const initialArray = ["cookies", "two", "three", "four", "tacos", "six"];

// console.log(initialArray.indexOf("tacos"));
// initialArray.splice(initialArray.indexOf(entriesToRemove), 1);
// console.log(initialArray);

// const removeFromArray = function(initialArray, entriesToRemove){
//     for(i = 0; i < entriesToRemove.length; i++){
//         initialArray.splice(initialArray.indexOf(entriesToRemove), 1);
//     }
//     console.log(initialArray);
// }

const removeFromArray = function(initialArray, ...entriesToRemove){
        for (const elements of initialArray) {
                for(entry of entriesToRemove){
                        if (initialArray.includes(entry)) {
                                initialArray.splice(initialArray.indexOf(entry), 1)
                        } else { 
                                continue; 
                        }
                }
        }
        return initialArray;
}

module.exports = removeFromArray;















// console.log(removeFromArray([1, 2, 2, 3, 4], 2, "tacos", 4));

// Do not edit below this line
