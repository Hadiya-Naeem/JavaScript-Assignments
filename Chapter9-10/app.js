// Question 1

// var city = prompt("Write your city name")
// if(city === "Karachi"){
// alert("Welcome to the city of lights");
// }

// Question 2

// var gender = prompt("What's your gender")
// if(gender === "Female"){
//  alert(" Good Morning Maam.")
// }
// else{
//     alert(" Good Morning Sir.")
// }

// Question 3
// var trafficColour = prompt("What's the color of traffic light")
// if(trafficColour == "Red"){
// alert("Must Stop");
// }
// else if(trafficColour == "Yellow"){
// alert("Ready to move ");
// }
// else{
// alert("Move now  ");
// }

// Question 4

// var fuelQuantity = +prompt("How much fuel is remaining in your car??")
// if(fuelQuantity == 2.5){
// alert("Please refill the fuel in your car");
// }

// Question 5
// a.
// var a = 4;
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }          (output shows)

// b.
// var b = 82;

// if(b++ === 83){
// alert("given condition for variable b is true");
// }             (output doesn't shows)

// c.
// var c = 12;

// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }                      (output doesn't shows)

// if (c === 13){ 
// alert("condition 2 is true"); 
// }            (output shows)

// if (++c < 14){ 
// alert("condition 3 is true"); 
// }          (output doesn't shows)

//  if(c === 14){ 
// alert("condition 4 is true"); 
// }             (output shows)

//  d.
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 

// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals to 22000"); 
// }                       (output shows)

// e.

//  if (true){     
// alert("True"); 
// }          (output shows)
// if (false){ 
// alert("False"); 
// }           (output doesn't shows)

// f.

// if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }         (output shows)


// Question 6

// var totalMarks = +prompt("Enter Total Marks:");
// var marks1 = +prompt("Enter Marks of Subject 1:");
// var marks2 = +prompt("Enter Marks of Subject 2:");
// var marks3 = +prompt("Enter Marks of Subject 3:");

// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }


// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%" + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

// Question 7
// var secretnum = 9;
// var guess =+prompt("Guess the secret number between 1 to 10")
// if(guess === secretnum){
//     alert("“Bingo! Correct answer");
// }
// else if( guess + 1 === secretnum){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Wrong answer");
// }

// Question 8
// var num = +prompt("Write a number")

// if(num%3 === 0 ){
//     alert("Your num is divisible by 3");
// }
// else{
//     alert("Your num is not divisible by 3");

// }


// Question 9

// var num =+prompt("Write a number")

// if(num%2 === 0){
//     alert("Given number is Even number");
// }

// else{
//     alert("Given number is Odd number");
// }

// Question 10

// var temp = prompt("What's the Temperature??")
 
// if(temp > 40 ){
// alert("It is too hot outside.");
// }

// else if(temp > 30 ){
// alert("The Weather today is Normal.");
// }

// else if(temp > 20 ){
// alert("Today's Weather is cool.");
// }

// else if(temp > 10 ){
// alert("OMG! Today's weather is so Cool.");
// }

// Question 11
// var firstNum =+prompt("Write your first number")
// var secondNum =+prompt("Write your second number")
// var operator =prompt("Write a operation (+,-,*,/,%)")

// if(operator == "+"){
//     alert(firstNum + secondNum);
// }

// else if(operator == "-"){
//     alert(firstNum - secondNum);
// }

// else if(operator == "*"){
//     alert(firstNum * secondNum);
// }

// else if(operator == "/"){
//     alert(firstNum / secondNum);
// }

// else if(operator == "%"){
//     alert(firstNum % secondNum);
// }