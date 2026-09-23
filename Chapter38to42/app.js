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

// Question 6

// function removeVowels(sentence) {
//     let result = ""

//     for (let i = 0; i < sentence.length; i++) {
//         let ch = sentence[i]

//         if (ch != "a" && ch != "e" && ch != "i" && ch != "o" && ch != "u" && ch != "A" && ch != "E" && ch != "I" && ch != "O" && ch != "U") {
//          result += ch;
//         }
//     }

//     return result
// }

// function main(){
//     let sentence = prompt("Enter a sentence")
//     let newSen = removeVowels(sentence)
//     document.write("Original Sentence: " + sentence + "<br />")
//     document.write("Sentence without vowels: " + newSen)

// }

// main()

// Question 7

// function vowels(sentence) {
//     let count = 0

//     for (i = 0; i < sentence.length; i++) {
//         let ch = sentence[i] + sentence[i + 1]

//         let characters = false

//         switch (ch) {
//             case "aa":
//                 characters = true;
//                 break;
//             case "ae":
//                 characters = true;
//                 break;
//             case "ai":
//                 characters = true;
//                 break;
//             case "ao":
//                 characters = true;
//                 break;
//             case "au":
//                 characters = true;
//                 break;
//             case "ea":
//                 characters = true;
//                 break;
//             case "ee":
//                 characters = true;
//                 break;
//             case "ei":
//                 characters = true;
//                 break;
//             case "eo":
//                 characters = true;
//                 break;
//             case "eu":
//                 characters = true;
//                 break;
//             case "ia":
//                 characters = true;
//                 break;
//             case "ie":
//                 characters = true;
//                 break;
//             case "ii":
//                 characters = true;
//                 break;
//             case "io":
//                 characters = true;
//                 break;
//             case "iu":
//                 characters = true;
//                 break;
//             case "oa":
//                 characters = true;
//                 break;
//             case "oe":
//                 characters = true;
//                 break;
//             case "oi":
//                 characters = true;
//                 break;
//             case "oo":
//                 characters = true;
//                 break;
//             case "ou":
//                 characters = true;
//                 break;
//             case "ua":
//                 characters = true;
//                 break;
//             case "ue":
//                 characters = true;
//                 break;
//             case "ui":
//                 characters = true;
//                 break;
//             case "uo":
//                 characters = true;
//                 break;
//             case "uu":
//                 characters = true;
//                 break;
//         }
//         if(characters){
//             count++
//         }
//     }
//     return count
// }

// function main(){
//     let sentence = prompt("Enter a sentence")
//     let result = vowels(sentence)

//     document.write("Sentence: " + sentence + "<br />")
//     document.write("No of Occurances: " + result)
// }
// main()

// Question 8

// function meter(km){
//     return km*1000
// }
// function feet(km){
//     return km*3280.84 
// }
// function inche(km){
//     return km*39370.1
// }
// function centimeter(km){
//     return km*100000
// }
// function main(){
//     let kilometres = Number(prompt("Enter distance in km "))
//     let meters = meter(kilometres)
//     let feets = feet(kilometres)
//     let inches = inche(kilometres)
//     let centimeters = centimeter(kilometres)

//     document.write("distance: " + kilometres + "<br />")
//     document.write("distance in meters: " + meters + "<br />")
//     document.write("distance in feets: " + feets + "<br />")
//     document.write("distance in inches: " + inches + "<br />")
//     document.write("distance in centimeters: " + centimeters)
// }
// main()

// Question 9


// function overTimePay(workedHours){
// if (workedHours > 40) {
//     let overTime = workedHours - 40
//     return overTime * 12
// }
// else{
//     return 0
// }
// }

// function main(){
//     let workedHours = Number(prompt("Enter worked hours"))
//     let pay = overTimePay(workedHours)
//     document.write("Worked Hours: " + workedHours + "<br />")
//     document.write("Over Time Pay " + pay)
// }
// main()

// Question 10

// function calculateNotes(amount) {
//     let hundred = Math.floor(amount / 100);
//     amount = amount % 100;

//     let fifty = Math.floor(amount / 50);
//     amount = amount % 50;

//     let ten = Math.floor(amount / 10);

//     document.write("100 notes: " + hundred + "<br>");
//     document.write("50 notes: " + fifty + "<br>");
//     document.write("10 notes: " + ten);
// }

// function main() {
//     let amount = Number(prompt("Enter amount:"));

//     calculateNotes(amount);
// }

// main();