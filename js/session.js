import sayOk, { sayYourName, User } from "./main.js";


sayOk()
sayOk()
sayOk()
sayOk()
sayOk()


sayYourName()


let user = new User('Mahmoud', 26)

console.log(user)


const student = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let { lastName: l, age } = student;

console.log(l)
console.log(age)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let [fruit1, , fruit2] = fruits;


console.log(fruit1)
console.log(fruit2)


const numbers = [23, 55, 21, 87, 56];

console.log(...numbers)
console.log(Math.max(...numbers))



function sum(a, b, ...c) {
    console.log(a)
    console.log(b)
    console.log(c)
    // return a + b + c
}
console.log(sum(5, 8, 9, 8, 4, 5, 21, 2, 1))


const fruits2 = new Map([
    ["apples", 500],
    ["apples", 500],
    ["apples", 500],
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits2)
