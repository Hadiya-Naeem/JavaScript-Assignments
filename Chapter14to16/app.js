// Question 1

// var studetsName = [];

// // Question 2
// var studetsName = new Array();

// // Question 3

// var fruits = ["Apple","Orange","Grapes","Banana"];

// // Question 4

// var numbers = [10, 20, 30, 40];

// // Question 5

// var boolean = [true, false, true, false];

// // Question 6

// var mixed = ["Hadiya", 20, true, "Naeem"];

// Question 7
//                      0     1     2     3     4       5      6      7  
// var qualifications = ["SSC","HSC","BCS","BS", "B.Com","MS", "M.Phil","Phd"];


// document.write("<h2>Qualifications:</h2>");

// document.write("<ol>")
// document.write("<li>" + qualifications[0] + "</li>")
// document.write("<li>" + qualifications[1] + "</li>")
// document.write("<li>" + qualifications[2] + "</li>")
// document.write("<li>" + qualifications[3] + "</li>")
// document.write("<li>" + qualifications[4] + "</li>")
// document.write("<li>" + qualifications[5] + "</li>")
// document.write("<li>" + qualifications[6] + "</li>")
// document.write("<li>" + qualifications[7] + "</li>")
// document.write("</ol>")

// Question 8

// var students = [];
// var score = []
// var totalNum = 500;
// for(var i = 0; i < 3; i++){
//     students[i]= prompt("Enter student name")
//     score[i]= +prompt("Enter score of " + students[i])
// }
// document.write("Score of " + students[0] + " is " + score[0] + ". Percentage: " + (score[0]/totalNum*100) + "% </br>" );
// document.write("Score of " + students[1] + " is " + score[1] + ". Percentage: " + (score[1]/totalNum*100) + "% </br>" );
// document.write("Score of " + students[2] + " is " + score[2] + ". Percentage: " + (score[2]/totalNum*100) + "%  </br>" );

// Question 9

// var colors = ["Red", "Blue", "Black"];

// document.write("Original array: " + colors + " </br></br>")

// a)
//  var colorStart = prompt("What color you want at the begining??");
// colors.unshift(colorStart);

// document.write(" Updated colors: " + colors)

// b)
// var colorEnd = prompt("What color you want at the End??");
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
// var desiredColor = prompt("Enter your desired color")
// var desiredIndex =+prompt("Enter your desired index")

// colors[desiredIndex]= desiredColor;

// document.write("Colors according to your desire: " + colors)

// g)
//  var desiredNum = +prompt("Enter how many colors do you want to remove")
//  var desiredPosition =prompt("Enter the index num from where you want to delete color")

//  colors.splice(desiredPosition, desiredNum)
// document.write("Colors removed according to your desire: " + colors)


// Question 10

// var studentsScore = ["320","230","480","120"]
// document.write("Score of Students:" + studentsScore + "<br/><br/>")
// studentsScore.sort()
// document.write(" Ordered Score of Students:" + studentsScore)


// Question 11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar <br/><br/>" ]
// document.write("Cities List: " + cities)
// var selectedCities = cities.slice(2,5)
// document.write("Selected cities List: " + selectedCities)

// Question 12

// var arr = ["This","is","my","Cat"]
// document.write(arr + "<br/><br/>")
// var text = arr.join(" ")
// document.write(text)

// Question 13

// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(devices + "<br/><br/>");
// var remove = devices.shift()
// document.write(remove + "<br/><br/>");
// var remove = devices.shift()
// document.write(remove + "<br/><br/>");
// var remove = devices.shift()
// document.write(remove);


// Question 14

// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(devices + "<br/><br/>");

// var remove = devices.pop()
// document.write(remove + "<br/><br/>");

// var remove = devices.pop()
// document.write(remove + "<br/><br/>");

// var remove = devices.pop()
// document.write(remove + "<br/><br/>");

// var remove = devices.pop()
// document.write(remove + "<br/><br/>");

// Question 15

// var phoneCompany = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

// document.write("<select>")
// document.write("<option>" + phoneCompany[0] + "</option>")
// document.write("<option>" + phoneCompany[1] + "</option>")
// document.write("<option>" + phoneCompany[2] + "</option>")
// document.write("<option>" + phoneCompany[3] + "</option>")
// document.write("<option>" + phoneCompany[4] + "</option>")
// document.write("<option>" + phoneCompany[5] + "</option>")
// document.write("</select>")