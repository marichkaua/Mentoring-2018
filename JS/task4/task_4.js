// 1 
let num = 1;
console.log(-num);

// 2
var string = "12345";
var result1 = string.substring(1, string.length - 1);
var result2 = string.slice(1, -1);
console.log(result1, result2);

//3.1 case sensitive
var myStringA = "dddEnglishsccc";
console.log(myStringA.includes("English"));

// 3.2
let myStringB = "dddEnglishsccc";
let searchedItemB = "English";
let foundItem = myStringB.toLowerCase()
    .includes(searchedItemB.toLowerCase());
console.log(foundItem);

// 3.3
let myStringC = "dddEnglishsccc";
let foundC = myStringC.search(/english/i) >= 0;
console.log(foundC);

// 3.4 
// QUESTION - why false?
let myStringD = "dddEnglishsccc";
let foundD = myStringD.match(/english/i) >= 0;
console.log(foundD);

// 3.5
let myStringE = "dddEnglishsccc";
let searchedItemE = "english";
let foundE = myStringE.toLowerCase().indexOf(searchedItemE.toLowerCase()) >= 0;
console.log(foundE);

/* QUESTIONS: 
var result= string.search(new RegExp(searchstring, "i")); -what is RegExp?

const raitings = [1,2,3,4,5,4,3,2,1];
console.log (raitings.indexOf(3))
-1 */

// 4 to be added

// 5
let array1 = [1, 2, 3];
let array2 = [3, 2, 1];
let arrayNew = [];
for (var i = 0; i < array1.length; i++) {
    arrayNew.push(array1[i] + array2[i]);
    console.log(arrayNew);
};

/*
 var sum = array1.map(function (num, idx) {
    return num + array2[idx];
  }); // [6,8,10,12]

  */