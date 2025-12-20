console.log(window)
console.log(document)
console.log(document.styleSheets)
console.log(document.head)
console.log(document.body)

/**********************  */
var myId = document.getElementById("testId")
console.log(myId)
let myClass = document.getElementsByClassName("testClass")
console.log(myClass)
let myTags = document.getElementsByTagName("div")
console.log(myTags)

let myInputs = document.getElementsByName("username")
console.log(myInputs)


console.log(document.forms)
console.log(document.forms[1])
console.log(document.forms.second)
console.log(document.images)


console.log(document.querySelector('#testId'))
console.log(document.querySelectorAll("section > div.testClass"))
console.log(document.querySelector('section'))
console.log(document.querySelector('section').innerHTML)
console.log(document.querySelector('section').outerHTML)
console.log(document.querySelector('section').innerText)

function addContent() {
    document.querySelector('section').innerHTML = `
    <div class="hello"><span>This is from JS</span>
    </div>`
}

function getValue() {
    console.log(myInputs[0].value)
}
/***************************************** */
let userInput = document.querySelector('#userInput'),
    userOutput = document.querySelector('#output');

console.log(userInput)
console.log(userOutput)

function greeting() {
    userOutput.innerHTML = "Hello " + userInput.value
}


let testInput2 = document.querySelector("#testInput2");

console.log(testInput2.getAttribute("placeholder"))

// testInput2.setAttribute("name", "employee name")

let passwordBtn = document.getElementById("passwordBtn")

function handlePassword() {
    if (testInput2) {
        testInput2.setAttribute("type", "text");
        passwordBtn.textContent = "Hide password"
    }
    else {
        testInput2.setAttribute("type", "password")
        passwordBtn.textContent = "Show password"
    }
}


/************************* */
let newOutput = document.getElementById("newOutput");

console.log(newOutput)

var mySpan = document.createElement("span"),
    myComment = document.createComment("This is from Js"),
    myContent = document.createTextNode('This is text from JS')

mySpan.append(myContent, myComment)
newOutput.appendChild(mySpan)
newOutput.style.color = "#F00"


console.log(document.getElementsByTagName("section")[0].children)
console.log(document.getElementsByTagName("section")[0].childNodes)


let parent = document.getElementById("parent");


console.log(parent.classList)
console.log(parent.classList.item(0))

function classExplain() {
    // parent.className = "newClass"
    // parent.classList.add("newClass")
    // parent.classList.remove("no")
    parent.classList.toggle("newClass")
}
