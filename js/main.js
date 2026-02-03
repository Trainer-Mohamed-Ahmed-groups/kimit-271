//  OOP


var person = {
    name: "Ali",
    age: 20
}



console.log(person)

export function User(name, age) {
    this.name = name;
    this.age = age
}

class Person {
    static counter = 0
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("Osman", 30)
let person2 = new Person("Khaled", 62)

console.log(Person.counter)

console.log(person1)
console.log(person2)

console.log("**************")
class Engineer extends Person {
    constructor(name, age, title) {
        super(name, age)
        this.title = title
    }
}


let eng1 = new Engineer('Sayed', 25, "Supervisor")

console.log(eng1)


String.prototype.sayHello = function (name) {
    return "Hello " + name;
}


console.log("Mohamed".sayHello("Mohamed"))


console.log(String.prototype)

export default function sayOk() {
    console.log("OK")
}
export function sayYourName() {
    console.log("I am Js")
}
