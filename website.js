// alert("website.js is loaded")

// let v = "hi"
// alert(v)

// let test = 90
// if (test == 90) {
//     alert("ninety")
// }
// else {
//     alert("not ninety")
// }

// let todos = []

// todos.push("eat")
// todos.push("make bed")
// todos.pop()

// todos = ["eat"]
// sets heading text to Not Todo
// let headingElement = document.getElementById("heading")
// headingElement.innerText = "Not Todo"

// let list = document.querySelector("mylist"),  can be used for classes and ids

let input = document.getElementById("input")

let button = document.getElementById("btn")
let items = document.getElementById("items")

function addTodo() {
    let todo = input.value
    let p = document.createElement("p")
    let removeBtn = document.createElement("button")

    p.innerText = todo
    removeBtn.innerText = "Remove"

    items.appendChild(p)
    items.appendChild(removeBtn)

    function removeTodo(){
        p.remove()
        removeBtn.remove()
    }

    removeBtn.addEventListener("click", removeTodo)
}

button.addEventListener("click", addTodo)

localStorage.setItem(key, value)
localStorage.getItem(key)