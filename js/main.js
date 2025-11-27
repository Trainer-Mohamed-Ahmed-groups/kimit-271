"use strict"
var x = 10;

// if (x > 0) {
//     console.log("Greater then 0")

//     if (x > 100) console.log("Greater then 100")
//     else console.log("Between 0 and 100")
// }
// else {
//     console.log("Lower")
// }


// if (x > 0) {
//     console.log("Greater then 0")
// }
// else if (x == 10) {
//     console.log("10")
// }
// else {
//     console.log("Lower")
// }


var username;

if (username == "admin") {
    console.log("Hello admin")
}
else {
    console.log("Please signup")
}


// x = x + 1;

console.log(x--)
console.log(++x)

// Arthmatic
console.log(10 % 4)
console.log(10 % 3)
console.log(10 % 2)


console.log(x)
// x = x / 5;
x -= 5;
console.log(x)


// null undefined
var y;

if (!y) { }
// not not haga
// 0 ""



if (5 > 4 || 6 > 50) {
    console.log("OK")
}


console.log(5 && 78 && null && 3)

// && Return last true and first false

console.log(0 || 9)

// || Return last false and first true

var i = 0
switch (i) {
    case 0:
    case 1:
        console.log("Zero or one")
        break;
    default:
        console.log("No case")
}

// var dayNum = +prompt("Please enter day number");

// switch (dayNum) {
//     case 1:
//         console.log("Saturday")
//         break;
//     case 2:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Not valid input")
//         break;
// }

try {
    console.log(first)
} catch (error) {
    console.error(error.message)
} finally {
    console.log("Ok")
}





function getRectArea(width, height) {
    if (isNaN(height) || isNaN(width)) {
        throw new Error('This is not valid input')
    }
    else if (width <= 0 || height <= 0) {
        throw new Error("This is a negative number")
    }
    else {
        return width * height
    }
}

// console.log(getRectArea(5, 7))
// console.log(getRectArea(3, 10))

try {
    console.log(getRectArea(3, undefined))
} catch (error) {
    console.error(error)
}

console.log("test");



p = 9

console.log(p);
