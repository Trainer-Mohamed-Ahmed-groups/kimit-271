console.log("****************************");
/* ******************* Create a loop get capital letters  *******************************/

for (let index = 65; index <= 90; index++) {
    console.log(String.fromCharCode(index))
}

console.log("****************************");
/* ******************* Create a loop get capital and small letters in one loop  *******************************/

for (let index = 97; index <= 122; index++) {
    console.log(String.fromCharCode(index))
}

console.log("****************************");

for (let index = 65; index <= 122; index++) {
    if (index > 90 && index < 97) continue;
    console.log(String.fromCharCode(index))
}

/* *******************  Search for text "bad" *******************************/

var myParagraph = "Hello Js is a good Js language I love Js";

if (myParagraph.includes('bad')) {
    console.log("bad")
}
else {
    console.log("Does not exist")
}
console.log(myParagraph.indexOf('bad'))


console.log("Js is repeated " + myParagraph.match(/Js/g).length + " times")

/* ******************* Get number of repetition of word *******************************/
var myWord = "I have a New course and new item and new task";
console.log(myWord.match(/new/gi))


// var myParagraph2 = "Hello Js is a good Js language I love Js";

// console.log(myParagraph2.split(' '))



/************************** Array **************************** */

var ages = [32, 33, 16, 40];


console.log(ages.every(function (age) { return typeof age === 'number' }))
