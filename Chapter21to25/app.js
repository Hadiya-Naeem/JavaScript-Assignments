// Question 1
// var firstName = prompt("Enter yoour first name")
// var lastName = prompt("Enter yoour last name")
// var fullName = firstName + lastName

// alert("Hi! " + firstName + " " + lastName)

// Question 2

// var favMobile = prompt("What is your fav mobile phone model")

// document.write("My favourite mobile is: " + favMobile)
// document.write("<br/>")
// document.write("Length of string: " + favMobile.length)      

// Question 3

// var word = "pakistani"
// var indexOfn = word.indexOf("n")
// document.write("string: " + word + "<br/>")

// document.write("index of n: " + indexOfn)

// Question 4

// var word = "Hello World"
// var index = word.lastIndexOf("l")

// document.write("String: " + word + "<br/>")
// document.write("Last index of l  is: " + index)

// Question 5
// var word = "Pakistani"
// var index =  word.charAt(3)
// document.write("String: " + word + "<br/>")
// document.write("letter at 3rd index: " + index)

// Question 6
// var firstName = prompt("Enter yoour first name")
// var lastName = prompt("Enter yoour last name")

// var fullName = firstName.concat(" " + lastName)
// alert("Hi! " + fullName)

// Question 7

// var city = "hyderabad"
// var replaced = city.replace("hyder" , "islam")

// document.write("City: " + city + "<br/>")
// document.write("Replaced: " + replaced)

// Question 8
// var para = "Ali and Sami are best friend and the play cricket and football together"

// var replaced = para.replaceAll("and" , "&")
// document.write(para + "<br/>")
// document.write(replaced)

// Question 9
// var num = "472"

// var result = parseInt(num)
// document.write("Value: " + num + "<br/>")
// document.write("Type: " + typeof(num) + "<br/>")
// document.write("Value: " + result + "<br/>")
// document.write("Type: " + typeof(result))

// Question 10
// var userName =prompt("Enter your name")
// var uppercase = userName.toUpperCase()
// document.write("User input: " + userName + "<br/>")
// document.write("Uppercase: " + uppercase)

// Question 11
// var input = prompt("Enter a word:");

// var result = input[0].toUpperCase() + input.slice(1);

// document.write("User input: " + input + "<br>");
// document.write("Title case: " + result);

// Question 12

// var num = 35.36;

// var str = num.toString();

// var result = str.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);

// Question 13
// var userName = prompt("Enter your user name:");

// for (var i = 0; i < userName.length; i++) {

//     var code = userName.charCodeAt(i);

//     if (code == 64 || code == 46 || code == 33) {
//         alert("Please enter a valid user name.");
//         break;
//     }
// }

// Question 14

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("What do you want");

// var found = false;

// for (var i = 0; i < bakery.length; i++) {
//     if (bakery[i] === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert(userInput + " is available at index " + i + " in our bakery");
// } else {
//     alert(userInput + " is not available ");
// }

// Question 15

// var password = prompt("Enter your password:");

// var found = true;


// if (password.length < 6) {
//     alert("Password must be at least 6 characters long");
//     found = false;
// }


// var firstCode = password.charCodeAt(0);

// if (firstCode >= 48 && firstCode <= 57) {
//     alert("Password cannot begin with a number");
//     found = false;
// }


// for (var i = 0; i < password.length; i++) {

//     var code = password.charCodeAt(i);

//     if (!(
//         (code >= 48 && code <= 57) ||
//         (code >= 65 && code <= 90) ||
//         (code >= 97 && code <= 122)
//     )) {
//         alert("Password should contain only letters and numbers");
//         found = false;
//         break;
//     }
// }

// if (found) {
//     alert("Valid password");
// }

// Question 16

// var University = "University of Karachi";

// var splitted = University.split("");

// for (var i = 0; i < splitted.length; i++) {
//     document.write(splitted[i] + "<br>");
// }

// Question  17

// var input = prompt("Enter your input:");

// var lastCharacter = input.charAt(input.length - 1);
// document.write("User Input: " + input + "<br/>")
// document.write("Last character is: " + lastCharacter);

// Question 18

// var text = "The quick brown fox jumps over the lazy dog";

// var updated = text.toLowerCase()

// var count = 0;

// for (var i = 0; i < updated.length; i++) {
//     if (updated.slice(i, i+3) == "the") {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrences of word 'the'");