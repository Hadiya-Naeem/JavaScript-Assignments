// Question 1

// var dateAndTime = new Date()
// document.write(dateAndTime)

// Question 2

// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];

// var currentMonth = new Date().getMonth();

// document.write("Current Month: " + months[currentMonth])

// Question 3 
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var today = new Date().getDay()

// document.write("Today is: " + days[today].slice(0,3))

// Question 4

// var today = new Date().getDay()

// if(today == 0 || today == 6){
//     document.write("It's a Fun Day")
// }

// Question 5

// var today = new Date().getDate()

// if(today <= 15){
//     document.write("It's first fifteen days of Month")
// }
// else{
//     document.write("It's last days of Month")

// }

// Question 6
// var date = new Date()

// var minutes = date.getTime() / (1000 * 60) 

// document.write("Current date: " + date +"<br/>")
// document.write("Elapsed Milliseconds since january 1,1970: " +date.getTime() )
// document.write("Elapsed Minutes since january 1,1970: " + minutes )

// Question 7

// var date = new Date()
// var hours = date.getHours()
//  if(hours < 12){
//     alert("It's AM");
//  }
//  else{
//         alert("It's PM");

//  }

// Question 8
// var laterDate = new Date("December 31, 2020");

// document.write(laterDate);

// Question 9

// var ramadan = new Date("February 19, 2026");
// var today = new Date();

// var daysPassed = Math.floor((today - ramadan) / (1000 * 60 * 60 * 24));

// document.write(daysPassed + " days have passed since 1st Ramadan");

// Question 10
// var referenceDate = new Date("December 5, 2015");
// var beginning2015 = new Date("January 1, 2015");

// var seconds = (referenceDate - beginning2015) / 1000;

// document.write("On reference date" + referenceDate + "<br /> " + seconds + " seconds had passed since the beginning of 2015");

// Question 11

// var time = new Date();

// var currentHour = time.getHours();

// time.setHours(currentHour + 1);

// document.write("Current date: " + new Date() + "<br/>");
// document.write("1 hour later: it will be " + time);

// Question 12

// var time = new Date();
// var currentYear = time.getFullYear()
// time.setFullYear(time.getFullYear() - 100);

// document.write("Current year: " + new Date() + "<br/>");
// document.write("100 years back: it was " + time);

// Question 13
// var age =Number(prompt("What is your age??"))
// var currentYear = new Date().getFullYear()
// var birthYear = currentYear - age
// document.write("your age: " + age + "<br/>")
// document.write("your Birth year: " + birthYear  )

// Question 14

