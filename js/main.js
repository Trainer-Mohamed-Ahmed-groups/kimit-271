var x = 1;

while (x <= 10) {
    console.log(x)
    x++;
}
console.log("*************")
console.log(x)
console.log("**** DO WHILE LOOP *********")

var y = 1;

do {
    console.log(y)
    y++;
} while (y <= 10);

console.log("***** FOR LOOP ********")

for (var i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("*******************")
var employees = ["Mohamed", "Ali", "Khaled", "Sami", "Mahomoud"];

// console.log(employees[3])

for (let index = 0; index < employees.length; index++) {
    console.log(employees[index])
}


var test = "abc";

console.log(test)

test += "d"
// abcd

console.log(test)



const arr = ['H', 'e', 'l', 'l', 'o'];
var text = "";

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    text += element;
    console.log("************")
    console.log("element " + element)
    console.log("text " + text)
}
console.log(text)

// Loop print the odd numbers (1 - 10) => 5 % 2 = 0

console.log("---------------------")
for (let t = 1; t <= 10; t++) {
    if (t % 2 === 1) { console.log(t) }
}

console.log("---------------------")

for (let t = 1; t <= 10; t += 2) {
    console.log(t)
}

console.log("---------------------")

for (let t = 1; t <= 10; t++) {
    if (t % 2 === 0) continue;
    console.log(t)
}

console.log("---------------------")

for (let t = 1; t <= 10; t++) {
    if (t === 4) break;
    console.log(t)
}



var t = 3;
if (t === 1)
    switch (t) {
        case 1:
            console.log("One")
            break;
        case 2:
            console.log("Two")
            break;
        default:
            console.log("Other")
    }


console.log("----------------------------");
// Hoisting
console.log(p)
var p = 5;

console.log("first")


function sayHello() {
    var user = 5;
    return user
}

console.log(sayHello())


var d = 5;

console.log(d);

d = 7
console.log(d);


{
    const m = 10
    console.log(m)
}

var f = 5;
console.log(f)
var f = 9;
console.log(f)


sayOk()

function sayOk() {
    console.log("OK")
}

// var sayOk = function () { console.log("OK") }


console.log(5 * "9");
console.log(5 + "9");
console.log(5 + true)
console.log(5 - [])
var res = []
if ([]) { console.log("first") }
