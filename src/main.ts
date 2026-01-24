var x: number | string = 5

x = "d"

function add(a: number = 0, b: number = 0): number {
    return a + b
}


function greet(name: string): void {
    console.log("first" + name)
}


interface Person {
    name: string
    age?: number
}
interface Post {
    title: string
    desc?: string | undefined
}
interface User {
    id: number
    name: string
    username: string
    email: string
}
var personOne: Person = {
    name: "kimit",
}

let posts = [] as Post[]

posts.push({ title: "hello world" })
posts.push({ title: "hello world", desc: "this is a post" })

let usersRequest = new XMLHttpRequest()
let output = document.getElementById('output') as HTMLElement

usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
usersRequest.send()

usersRequest.onreadystatechange = function (): Promise<User[]> | User[] | void {
    if (this.readyState === 4 && this.status === 200) {
        let res = JSON.parse(this.response)
        console.log(res)

        return res as User[]
    }
}
