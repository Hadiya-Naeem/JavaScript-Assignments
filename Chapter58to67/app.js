// // Question 1
// // i.
// let mainContentElements = document.getElementById("mainContent")
// // ii.
// let childMainElement = mainContentElements.childNodes
// // iii.
// let renderElements = document.querySelectorAll(".render")
// for(let i = 0; i < renderElements.length; i++){
//     document.write(`InnerHtml of class render: ${renderElements[i].innerHTML}<br />`)
// }
// // iv.
// let firstName = document.getElementById("firstName").value
// firstName = "Hadiya"
// // v.
// let lastName = document.getElementById("lastName").value
// lastName = "Naeem"
// let email = document.getElementById("email").value
// email = "hadiya@gmail.com"

// // Question  2
// // i.
// let form = document.getElementById("formContent").nodeType
// document.write(`Node type of formContent is: ${form} <br />`)
// // ii.
// let lastNameNode = document.getElementById("lastName").nodeType
// document.write(`Node type of lastName is: ${lastNameNode} <br /><br />`)
// // iii.
// let lastNamed = document.getElementById("lastName")
// lastNamed.innerHTML = "new text"

// // iv.
// let mainFirstChild = mainContentElements.firstElementChild.innerHTML
// document.write(`First Element of maincontent: ${mainFirstChild} <br />`)

// let mainLastChild = mainContentElements.lastElementChild.innerHTML
// document.write(`First Element of maincontent: ${mainLastChild} <br /><br />`)
// // v.
// let previousmian = lastNamed.previousSibling.innerHTML
// document.write(`Previous Sibling of lastName: ${previousmian} <br />`)

// let nextMain = lastNamed.nextSibling.innerHTML
// document.write(`Next Sibling of lastName: ${nextMain} <br /><br />`)
// // vi.
// let emailed = document.getElementById("email")
// let parentNode = emailed.parentNode
// document.write(`parent node of email is: ${parentNode} <br />`)

// let emailNodeType = emailed.nodeType
// document.write(`node type of email is: ${emailNodeType}`)