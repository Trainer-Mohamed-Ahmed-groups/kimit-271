// var firstName = "Ali",
//     lastName = "Khaled";

// console.log(firstName)
// console.log(lastName)

// //Concatenation
// console.log(firstName + " " + lastName)
// console.log(`${firstName} ${lastName}`)


// var userAge = prompt("Please enter your age");

// console.log(userAge)

// // Get from user first name and last name then show the full name

// var userName = prompt("Please enter your name "),
//     userLastName = prompt("Please enter your last name "),
//     age = prompt("Please enter your age ");

// console.log(userName)
// console.log(userLastName)
// console.log(age)

// console.log(`Your full name is : ${userName} ${userLastName} and your age is ${age}`)
// // Get from user age then console his age in days
// console.log(`Your age in days is ${age * 365}`)

// var grade = prompt("Enter your grade")
// console.log(456)
// console.log(grade)
// console.log(Number(grade) + 10)
// console.log(+grade + 10)


// -------------------------------------- Object -------------------------
var car = {
    // Key : value
    name: "Mercedes",
    model: 2022,
    isSold: true,
    owner: undefined
}

console.log(car)

// Bracket notation
console.log(car["name"])

// Dot notation
console.log(car.model)


// ----------------------------------- Function ----------------------------
// Void
function sayHello() {
    console.log("Hello world")
}

sayHello()


// Returning value function
function add(x = 0, y = 0) {
    console.log(x)
    console.log(y)
    console.log("**********")
    return (x + y)
}

console.log(add(4, 9))
console.log(add(8, 90))
console.log(add(88))
console.log(add())

function add2(x, y) {
    return x + y
}

console.log(add2(3, 6))


var sayOk = function () { console.log('OK') }
sayOk()


// ----------------------------------- Array ----------------------------
var employees = ["Ahmed", "Ali", "Ebrahim", "Youssef", "Mahmoud"]
console.log(employees)
console.log(employees.length)
console.log(employees[1])
console.log(employees[3])
console.log(employees[employees.length - 1])
console.log(employees.at(-1))
employees[5] = "Mazen"
console.log(employees)


var data = [["HTML", "CSS"], ["Js", "React"]]

console.log(data);
console.log(data[0][1]);
