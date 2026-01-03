let jsPerson = { name: "Ali", age: 22 }

console.log(jsPerson)
console.log(JSON.stringify(jsPerson))



console.log("**********")
let jsonPerson = '{ "name": "Mahmoud", "age": 26 }'

console.log(jsonPerson)
console.log(JSON.parse(jsonPerson))

// API  : Application programming interface
// JSON : javascript object notation
// XHR  : XML HTTP Request
// XML  : extensible  markup language
// HTTP : Hyper text transfer protocol
// AJAX : Asynchronous javascript and XML

/*
0- Request not initialized
1- Server connection created
2- Request received
3- Request processing
4- Request ready
*/

let usersRequest = new XMLHttpRequest()

// console.log(usersRequest)
let output = document.querySelector('#output')

usersRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.response)
        console.log(res)
        output.nextElementSibling.classList.add('d-none')
        for (let index = 0; index < res.length; index++) {
            const user = res[index];
            output.innerHTML += `<li class="list-group-item">${user.name}</li>`
        }
    }
}

usersRequest.open("GET", "https://jsonplaceholder.typicode.com/users")

usersRequest.send()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => console.log(res))
