// Question 1

// let main = document.getElementById("main-content")
// let mainChildrens = main.children
// let renderElements = document.getElementsByClassName("render")
// for(let i = 0; i < renderElements.length; i++){
//     document.write(renderElements[i].innerHTML + "<br />")
// }
// let fillValue = document.getElementById("first-name")
//  let fullName = fillValue.innerHTML = "Hadiya"
// console.log(fullName)
// let lastValue = document.getElementById("last-name")
//  let lastName = fillValue.innerHTML = "Naeem"
// console.log(lastName)
// let emailValue = document.getElementById("email")
//  let email = fillValue.innerHTML = "nhadiya415@gmail.com"
// console.log(email)

// Question 2

let nodeTypefirst = document.getElementById("form-content").nodeType
document.write("Node Type of form-content = "+ nodeTypefirst + "<br />")
let nodeTypelast = document.getElementById("last-name").nodeType
document.write("Node Type of last-name = "+ nodeTypelast + "<br />")
let lastNameChild =  document.getElementById("last-name").childNodes
document.write("child nodes of last-name" + lastNameChild.length + "<br />")
let firstChildMain = document.getElementById("main-content").firstChild
let lastChildMain = document.getElementById("main-content").lastChild
document.write("first child of main-content = " + firstChildMain + "<br />")