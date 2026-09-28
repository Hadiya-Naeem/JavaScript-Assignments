// Question 1

// let submit = document.querySelector("#form")
// submit.addEventListener("submit", function(event){
//        event.preventDefault();
//        let name = document.querySelector("#name").value
//        let email = document.querySelector("#email").value
//        let password = document.querySelector("#password").value
//       submit.remove()

//        document.querySelector("#diaplayData").innerHTML =`
// <P>Name: ${name}</P>
// <P>Email: ${email}</P>
// <P>Password: ${password}</P>
// `
// })

// Question 2

// let newPara = "The new iPhone Burgundy features a stylish and premium design with a rich burgundy finish.It offers a bright and smooth display, a powerful processor, an advanced camera system, and long - lasting battery life.The phone is designed for fast performance, high - quality photography, gaming, and everyday use.Its elegant color and modern features make it a great choice for users who want both style and performance."
// let  oldPara = document.querySelector("#lessText")
// let oldText = oldPara.innerHTML
// let btn  = document.querySelector("#readMore")
// btn.addEventListener("click", function(){
//     oldPara.innerHTML = newPara
//      btn.innerHTML = "Read Less"
//      btn.addEventListener("click", function(){
//         oldPara.innerHTML = oldText
//         btn.innerHTML = "Read More"

//      })
// })

// Question 3

// let studentForm = document.querySelector("#studentForm");
// let studentTable = document.querySelector("#studentTable");
// let editForm = document.querySelector("#editForm");
// let editName = document.querySelector("#editName");
// let editEmail = document.querySelector("#editEmail");
// let editCourse = document.querySelector("#editCourse");
// let updateBtn = document.querySelector("#updateBtn");

// let selectedRow;

// studentForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#email").value;
//     let course = document.querySelector("#course").value;

//     let row = document.createElement("tr");

//     row.innerHTML = `
//         <td>${name}</td>
//         <td>${email}</td>
//         <td>${course}</td>
//         <td>
//             <button class="editBtn">Edit</button>
//             <button class="deleteBtn">Delete</button>
//         </td>`

//     studentTable.appendChild(row);

//     let deleteBtn = row.querySelector(".deleteBtn");

//     deleteBtn.addEventListener("click", function () {

//         row.remove();

//     });

//     let editBtn = row.querySelector(".editBtn");

//     editBtn.addEventListener("click", function () {

//         selectedRow = row;

//         editName.value = row.children[0].innerText;
//         editEmail.value = row.children[1].innerText;
//         editCourse.value = row.children[2].innerText;

//         editForm.style.display = "block";

//     });


//     studentForm.reset();

// })

// updateBtn.addEventListener("click", function () {

//     selectedRow.children[0].innerText = editName.value;
//     selectedRow.children[1].innerText = editFatherName.value;
//     selectedRow.children[2].innerText = editAge.value;
//     selectedRow.children[3].innerText = editCourse.value;

//     editForm.style.display = "none";
// })



