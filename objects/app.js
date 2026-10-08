// Question 1

// var itemsArray =[
//     {name:"juice",price:"50",quantity:"3"},
//     {name:"cookie",price:"30",quantity:"9"},
//     {name:"shirt",price:"880",quantity:"1"},
//     {name:"pen",price:"100",quantity:"2"},
// ]
// let totalPrice = 0;
// for(i=0; i<4; i++){
//     console.log(`Price of ${itemsArray[i].name}s is: ${itemsArray[i].price*itemsArray[i].quantity}`)
//     totalPrice += itemsArray[i].price*itemsArray[i].quantity
// }
// console.log(`Total price of items: ${totalPrice}`)

// Question 2

// let user = {
//     name: "Hadiya",
//     email: "hadiya@gmail.com",
//     password: "12345",
//     age: 20,
//     gender: "Female",
//     city: "Karachi",
//     country: "Pakistan"
// }

// console.log("age" in user)
// console.log("country" in user)

// console.log("firstName" in user)
// console.log("lastName" in user)

// Question 3

// function Student(name, age, city, course) {
//     this.name = name
//     this.age = age
//     this.city = city
//     this.course = course
// }

// let student1 = new Student("Ali", 20, "Karachi", "Web Development")
// let student2 = new Student("Ahmed", 22, "Lahore", "Graphic Designing")
// let student3 = new Student("Sara", 19, "Islamabad", "Artificial Intelligence")

// console.log(student1)
// console.log(student2)
// console.log(student3)

// Question 4

// function Person(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// function addRecord() {

//     let name = document.getElementById("name").value;
//     let address = document.getElementById("address").value;
//     let education = document.getElementById("education").value;
//     let profession = document.getElementById("profession").value;

//     let gender = document.querySelector('input[name="gender"]:checked').value;

//     let person = new Person(
//         name,
//         gender,
//         address,
//         education,
//         profession
//     );

//     document.getElementById("records").innerHTML += `
//         <p>
//             Name: ${person.name}<br>
//             Gender: ${person.gender}<br>
//             Address: ${person.address}<br>
//             Education: ${person.education}<br>
//             Profession: ${person.profession}
//         </p>
//         <hr>
//     `;
// }