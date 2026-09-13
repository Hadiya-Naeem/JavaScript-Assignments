// Question 1

// let date = new Date();
// document.write(date);

// Question 2

// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")

// function greet(name1, name2){

// document.write(`hi! ${name1} ${name2}`)

// }

// greet(firstName, lastName )
// Question 3

// let num1 = Number(prompt("Enter first number for addition"))
// let num2 = Number(prompt("Enter second number for addition"))

// function add(number1 , number2){
// document.write(`add: ${number1 + number2} `)
// }
// add(num1 ,num2)

// Question 4

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter the opertaor: (+,-,/,*,%)")

// function operate(firstNum,secondNum,sign){
//  if(sign === "+"){
//     document.write(`addition: ${firstNum +secondNum}`)
//  }
//  else if(sign === "-"){
//     document.write(`subtraction: ${firstNum - secondNum}`)
//  }
//   else if(sign === "*"){
//     document.write(`multiplication: ${firstNum * secondNum}`)
//  }
//   else if(sign === "/"){
//     document.write(`sub: ${firstNum / secondNum}`)
//  }
//   else if(sign === "%"){
//     document.write(`sub: ${firstNum % secondNum}`)
//  }

// }
// operate(num1,num2,operator)

// Question 5

// let num = Number(prompt("Enter a number"));

// function square(number){
//   return number*number

// }

// let result = square(num)

// document.write(result)


// Question 6

// function factorial(num) {
//     let result = 1;

//     for (i = num; i >= 1; i--) {
//         result = result * i;

//     }
//      return result
// }

// let answer = factorial(Number(prompt("Enter a number")))
// document.write(answer)

// Question 7

// function counting(num1, num2){
// for(i = num1; i <= num2; i++){
// document.write(`${i} <br />`)
// }
// }
// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));

// counting(firstNumber,secondNumber)

// Question 8

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);

//     let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }


// let base = prompt("Enter the base:");
// let perpendicular = prompt("Enter the perpendicular:");

// let result = calculateHypotenuse(Number(base), Number(perpendicular));

// document.write("Hypotenuse = " + result);


// Question 9

// function calculateArea(width, height) {
//     return width * height;
// }

// let area = calculateArea(10, 5);

// document.write("Area of rectangle = " + area);


// function calculateArea(width, height) {
//     return width * height;
// }

// let width = 10;
// let height = 5;

// let area = calculateArea(width, height);

// document.write("Area of rectangle = " + area);


// Question 10

// function checkPalindrome(str) {
//     let reverse = str.split("").reverse().join("");

//     if (str === reverse) {
//         return "It is a palindrome";
//     } else {
//         return "It is not a palindrome";
//     }
// }

// let word = prompt("Enter a word:");
// alert(checkPalindrome(word));

// Question  11

// function capitalizeWords(str) {
//     let words = str.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     return words.join(" ");
// }

// let string = "the quick brown fox";
// let result = capitalizeWords(string);

// document.write("String: " + string + "<br />");
// document.write("Captilize Word: "  + result);

// Question  12

// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// let string = "Web Development Tutorial";
// let longest = findLongestWord(string);

// document.write("String: " + string + "<br />");
// document.write("Longest Word: " + longest);

// Question  13

// function countLetter(str, letter) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = countLetter("JSResourceS.com", "o");
// alert(result);

// Question  14

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.write("The area is " + area);
// }

// var radius = +prompt("Enter the radius:");

// calcCircumference(radius);
// document.write("<br>");
// calcArea(radius);