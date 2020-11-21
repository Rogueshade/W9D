function addAndMultiply(numOne, numTwo) {
    return (numOne + numTwo) * 5;
}
function lengthChecker(stringsToCheck) {
    if(stringsToCheck.length > 10) {
        return true;
    } else if(stringsToCheck.length <= 10) {
        return false;

    } else {
        console.log("Something went wrong here!");
    }
}

function arrayChecker(arrayToCheck) {
    for (var index = 0; index < arrayToCheck.length; index++) {
        if(arrayToCheck[index].startsWith("ph")) {
            return arrayToCheck[index];
        }
    }
    console.log("No string start with ph");
}

console.log(addAndMultiply(4, 4));
console.log(addAndMultiply(6, 1));
console.log(addAndMultiply(5, 7));

console.log(lengthChecker("short"));
console.log(lengthChecker("lengthy"));
console.log(lengthChecker("reallengthy"));

console.log(arrayChecker(["phase", "newphase"]));
console.log(arrayChecker(["moon", "newphase"]));
console.log(arrayChecker(["newphase", "moon", "phase"]));
