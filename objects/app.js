// Question 1

// let itemsArray = [
//     {name: "juice", price: "50", quantity: "3"},
//     {name: "cookie", price: "30", quantity: "9"},
//     {name: "shirt", price: "880", quantity: "1"},
//     {name: "pen", price: "100", quantity: "2"}
// ];

// let total = 0

// itemsArray.forEach(function(item) {

//     let itemTotal = Number(item.price) * Number(item.quantity)

//    document.write(item.name + " total price = " + itemTotal + "<br />")

//     total = total + itemTotal
// })

// document.write("Total price of all items = " + total)

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

function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

let form = document.querySelector("#populationForm");
let records = document.querySelector("#records");

let people = JSON.parse(localStorage.getItem("people")) || [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.querySelector("#address").value;
    let education = document.querySelector("#education").value;
    let profession = document.querySelector("#profession").value;

    let person = new Person(
        name,
        gender,
        address,
        education,
        profession
    );

    people.push(person);

    localStorage.setItem("people", JSON.stringify(people));

    displayRecords();

    form.reset();
});


function displayRecords() {

    records.innerHTML = "";

    people.forEach(function(person, index) {

        records.innerHTML += `
            <div>
                <h3>Record ${index + 1}</h3>
                <p>Name: ${person.name}</p>
                <p>Gender: ${person.gender}</p>
                <p>Address: ${person.address}</p>
                <p>Education: ${person.education}</p>
                <p>Profession: ${person.profession}</p>
                <hr>
            </div>
        `;
    });
}

displayRecords();