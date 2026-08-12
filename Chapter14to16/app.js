// Question 1

// let studetsName = [];

// // Question 2
// let studetsName = new Array();

// // Question 3

// let fruits = ["Apple","Orange","Grapes","Banana"];

// // Question 4

// let numbers = [10, 20, 30, 40];

// // Question 5

// let boolean = [true, false, true, false];

// // Question 6

// let mixed = ["Hadiya", 20, true, "Naeem"];

// Question 7
//                      0     1     2     3     4       5      6      7  
// let qualifications = ["SSC","HSC","BCS","BS", "B.Com","MS", "M.Phil","Phd"];


// document.write("<h2>Qualifications:</h2>");

// for (i = 0; i < qualifications.length; i++){
//     document.write((i + 1) + ") " + qualifications[i] + "</br>" )
// }

// Question 8

// let students = [];
// let score = []
// var totalNum = 500;
// for( i = 0; i < 3; i++){
//     students[i]= prompt("Enter student name")
//     score[i]= +prompt("Enter score of " + students[i])
// }
// document.write("Score of " + students[0] + " is " + score[0] + ". Percentage: " + (score[0]/totalNum*100) + "% </br>" );
// document.write("Score of " + students[1] + " is " + score[1] + ". Percentage: " + (score[1]/totalNum*100) + "% </br>" );
// document.write("Score of " + students[2] + " is " + score[2] + ". Percentage: " + (score[2]/totalNum*100) + "%  </br>" );

// Question 9

let colors = ["Red", "Blue", "Black"];

document.write("Original array: " + colors + " </br></br>")

// a)
// let colorStart = prompt("What color you want at the begining??");
// colors.unshift(colorStart);

// document.write(" Updated colors: " + colors)

// b)
// let colorEnd = prompt("What color you want at the End??");
// colors.push(colorEnd);
//  console.log(colors)
// document.write(" Updated colors: " + colors)

// c)
// colors.unshift("beige","SageGreen")

// document.write("Added 2 colors at the beginning: " + colors)

// d)
// colors.shift()
// document.write("Deleted the first color: " + colors)

// e)
// colors.pop()
// document.write("Deleted the last color: " + colors)

// f)
// let desiredColor = prompt("Enter your desired color")
// let desiredIndex =+prompt("Enter your desired index")

// colors[desiredIndex]= desiredColor;

// document.write("Colors according to your desire: " + colors)

// g)
//  let desiredNum = +prompt("Enter how many colors do you want to remove")
//  let desiredPosition =prompt("Enter the index num from where you want to delete color")

//  colors.splice(desiredPosition, desiredNum)
// document.write("Colors removed according to your desire: " + colors)
