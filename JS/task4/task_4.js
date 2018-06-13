// 1 
function myF(num) {
    return (-num);
}

// 2
function stringCut(string) {
    return string.substring(1, string.length - 1);
    // return string.slice(1, -1);
}

//3.1 case sensitive
var myStringA = "dddEnglishsccc";
console.log(myStringA.includes("English"));

// 3.2
function stringContains(myStringB) {
    let searchedItemB = "English";
    let foundItem = myStringB
        .toLowerCase()
        .includes(searchedItemB.toLowerCase());
    return foundItem;
}

// 3.3
let myStringC = "dddEnglishsccc";
let foundC = myStringC.search(/english/i) >= 0;
console.log(foundC);

// 3.4 
// QUESTION - why false?
let myStringD = "dddEnglishsccc";
let foundD = myStringD.match(/english/i).length >= 0;
console.log(foundD);

// 3.5
let myStringE = "dddEnglishsccc";
let searchedItemE = "english";
let foundE = myStringE.toLowerCase().indexOf(searchedItemE.toLowerCase()) >= 0;
console.log(foundE);

// 3.4.1
var today = new Date();
var myYear = prompt("What year were you born in?");
var birthday = new Date(myYear);
var yearsNow = today.getFullYear() - birthday.getFullYear();
console.log("You are " + yearsNow + " year(s) old.");

// 3.4.2
function calculate_age(dob, yearCurrent) {
    var birth = dob.getFullYear();
    var curr = yearCurrent.getFullYear();
    var futureAge = birth - curr;
    var pastAge = curr - birth;
    if (curr == birth) {
        return "You were born this very year!";
    } else if (curr < birth) {
        return "You will be born in " + futureAge + isOdd(futureAge);
    } else {
        return "You are " + pastAge + isOdd(pastAge) + " old.";
    }

    function isOdd(year) {
        if ((year % 2) == 1) {
            return " year";
        } else {
            return " years"
        }
    }
}
console.log(calculate_age(new Date(2000, 06, 11), new Date(2025, 06, 11)));

// 5
function arraysSum(array1, array2) {
    let arrayNew = [];
    for (var i = 0; i < array1.length; i++) {
        arrayNew.push(array1[i] + array2[i]);
    };
    return arrayNew;
}
