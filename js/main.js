"use strict";


var counter = 1;
function sayHello() {
    console.log("Hello => " + counter);
    counter++

    if (counter > 5) {
        clearInterval(firstInterval)
    }
}

console.log("A");
console.log("B");



// sayHello();


// var firstInterval = setInterval(sayHello, 1000)

function stopInterval() {
    // clearInterval(firstInterval)
    clearTimeout(firstTimeout)
}


// var firstTimeout = setTimeout(sayHello, 5000)


// 10:09 --------------- Task صياااااااح ------------------
console.log("00:00")
console.log("00:01")
console.log("00:02")
console.log("00:59")
console.log("01:00")


console.log(Math.PI)
console.log(Math.round(3.4))
console.log(Math.round(3.7))
console.log(Math.ceil(3.01))
console.log(Math.floor(3.99))
console.log(Math.max(12, 45, 78, 8, 54, 7))
console.log(Math.min(12, 45, 78, 8, 54, 7))
console.log(Math.pow(5, 3))
console.log(Math.random() * 10)
console.log(Math.ceil(Math.random() * 10))
console.log(Math.sqrt(25))


var persons = ["Ahmed", "Mohamed", "Omar", "Ali"];

console.log(persons[Math.round(Math.random() * (persons.length - 1))])

var myNum = 4564.4588

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(myNum.toExponential(3))
console.log(myNum.toFixed(2))
console.log(Number.isInteger(45.5))
console.log("a" / 4)
console.log(typeof ("a" / 4))
console.log(Number.isNaN(1 / "s"))
console.log(Number.isSafeInteger(45))
console.log(1 / 0)
console.log(typeof (1 / 0))

console.log("*".repeat(20))

var myDate = new Date("2024-02-25");
const myDate2 = new Date("2024-03-05");
var checkIn = myDate.getTime() / 1000 / 60 / 60 / 24;
var checkout = myDate2.getTime() / 1000 / 60 / 60 / 24

console.log(checkout - checkIn)

// 1-1-1970

var output = document.getElementById('output');
setInterval(function () {
    var date = new Date();
    output.textContent = date.toLocaleTimeString();
}, 1000)
