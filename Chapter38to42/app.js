// let onBtn = document.querySelector("#on")
// let bulbOff = document.querySelector("#bulboff")
// onBtn.addEventListener("click", function() {
//     console.log("hello")
//     bulbOff.src = "./images/bulb.jpg"
// })


// let offBtn = document.querySelector("#off")
// offBtn.addEventListener("click", function() {
//     console.log("hello")
//     bulbOff.src = "./images/bulb off.jpg"
// })

// Question 1
// function power(a, b) {
//     return a ** b;
// }

// console.log(power(2, 3));

// Question 2

// function leapYear(year){
// if(year % 400 === 0){
// return "leap year"
// }
// else if(year % 100 === 0){
// return "Not a leap year"
// }
// else if(year % 4 === 0){
// return "leap year"
// }
// else{
//     return "Not leap year"
// }
// }

// let userInput = Number(prompt("Enter a year"))
// let result = leapYear(userInput)
// alert(result)

// Question 3

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     let S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// let a = Number(prompt("Enter side a:"));
// let b = Number(prompt("Enter side b:"));
// let c = Number(prompt("Enter side c:"));

// console.log("Area =", calculateArea(a, b, c));

// Question 4

// function average(mark1,mark2,mark3){
//     return(mark1+mark2+mark3)/3
// }
// function percentageCal(totalMarks){
// return (totalMarks/300)*100
// }

// function  main(){
//     let mark1 = Number(prompt("Enter first sub marks out of 100"))
//     let mark2 = Number(prompt("Enter second sub marks out of 100"))
//     let mark3 = Number(prompt("Enter third sub marks out of 100"))

//     let avg = average(mark1,mark2,mark3)
//     let total = mark1 + mark2 + mark3
//     let percentage = percentageCal(total)

//     document.write("Total Marks: 300 <br />")
//     document.write("Obtained Marks: " + total + "<br />")
//     document.write("Percentage: " + percentage)
// }
// main()

// Question 5

// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }

  
// }

// let result = myIndexOf("Hello", "l");

// alert("the charater is at index number " + result);