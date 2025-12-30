var parent = document.getElementById("parent");

console.log(parent)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
console.log(parent.children)
console.log(parent.children[1].nextElementSibling)
console.log(parent.children[1].previousElementSibling)




console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.lastChild)
console.log(parent.children[1].nextSibling)
console.log(parent.children[1].previousSibling)
// *////////////////////////////////////////////////////////////////////////
var myElement = document.createElement('span')
myElement.textContent = "I am span from Js"
// parent.insertBefore(myElement, parent.children[0])
parent.appendChild(myElement)

parent.innerHTML += 'test'





var myBtn = document.querySelector('#myBtn');

// myBtn.onclick = function () {
//     console.log("Clicked 1")
// }

// myBtn.onclick = function () {
//     console.log("Clicked 2")
// }

window.addEventListener('load', () => console.log("Loaded"))


myBtn.addEventListener('contextmenu', function () {
    console.log("Right Click")
})

var usernameInput = document.getElementsByName('username')[0]

document.forms[0].addEventListener('submit', (ev) => {
    if (usernameInput.value.length < 8) {
        ev.preventDefault()
        document.getElementById('errorUsername').textContent = "Please enter a valid username"
    }
})

myBtn.addEventListener('mousedown', () => console.log("Down"))
myBtn.addEventListener('mouseup', () => console.log("Up"))


usernameInput.addEventListener('focus', () => { console.log("Focused") })
usernameInput.addEventListener('blur', () => { console.log("Blur") })


// usernameInput.addEventListener('keydown', (ev) => { console.log(ev.target.value) })
// usernameInput.addEventListener('keypress', (ev) => { console.log(ev.target.value) })
usernameInput.addEventListener('keyup', (ev) => { console.log(ev.target.value); console.log("Up") })
usernameInput.addEventListener('change', (ev) => { console.log(ev.target.value); console.log("Changed") })

/******************************************************************************** */
// JS BOM
console.log(window.location)


// var test = confirm("Please enter")
// console.log(test)


// localStorage.setItem('theme', 'dark')
// console.log(localStorage.getItem('theme'))
// localStorage.removeItem('theme')
// localStorage.clear()
console.log(localStorage.key(0))
let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';


document.body.className = theme

function handleTheme() {
    localStorage.removeItem('user')
    if (theme === 'dark') {
        theme = 'light'
    }
    else { theme = 'dark' }
    localStorage.setItem('theme', theme)
    document.body.className = theme
}

document.getElementById('themeBtn').addEventListener('click', handleTheme)
document.cookie = "username=John Doe; expires=Thu, 29 Dec 2025 12:00:00 UTC";
