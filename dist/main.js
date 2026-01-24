"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 5;
x = "d";
function add(a = 0, b = 0) {
    return a + b;
}
function greet(name) {
    console.log("first" + name);
}
var personOne = {
    name: "kimit",
};
let posts = [];
posts.push({ title: "hello world" });
posts.push({ title: "hello world", desc: "this is a post" });
let usersRequest = new XMLHttpRequest();
let output = document.getElementById('output');
usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
usersRequest.send();
usersRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.response);
        console.log(res);
        return res;
    }
};
//# sourceMappingURL=main.js.map