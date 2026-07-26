// Question 1
// var a = 10;

// document.write("Result:" + "<br/>")
// document.write("The value of a is:" + a + "<br/><br/>");
// document.write("The value of ++a is: " + (++a) + "<br/>");
// document.write("Now the value of a is: " + a + "<br/><br/>");;
// document.write("the value of a++ is: " + (a++) + "<br/>");
// document.write("Now the value of a is: " + a + "<br/><br/>");
// document.write("The value of --a is: " + (--a) + "<br/>");
// document.write("Now the value of a is: " + a + "<br/><br/>");
// document.write("The value of a-- is: " + (a--) + "<br/>");
// document.write("Now the value of a is: " + a + "<br/><br/>");


// Question 2
// var a = 2, b = 1;

// document.write("a is: " + a + "<br/>");
// document.write("b is: " + b + "<br/>");
// document.write("Result is: ??? " + "<br/><br/>");
// document.write("--a is: " + (--a) + "<br/>");
// document.write("Now a becomes:" + a + "<br/><br/>");
// document.write("--a - --b is: " + (--a - --b) + "<br/>");
// document.write("Now the value of a is: 0 and b is: 0" + "<br/><br/>");
// document.write("--a - --b + ++b is: " + (--a - --b + ++b) + "<br/>");
// document.write("Now the value of a is: -1 and b is: 0" + "<br/><br/>");
// document.write("--a - --b + ++b + b-- is: " + (--a - --b + ++b + b--) + "<br/>");
// document.write("Now the value of a is: -2 and b is: -1" + "<br/><br/>");
// document.write("Result is: -1 " );


// Question 3
// var userName = prompt("What's your name?")
// document.write("Hi! " + userName);

// Question 5
// var num = prompt("Enter a number" ,5)
// document.write("Multiplication table of " + num + "<br/><br/>");
// document.write( num + "x1=" + (num)  + "<br/>");
// document.write( num + "x2=" + (num*2) + "<br/>");
// document.write( num + "x3=" + (num*3) + "<br/>");
// document.write( num + "x4=" + (num*4) + "<br/>");
// document.write( num + "x5=" + (num*5) + "<br/>");
// document.write( num + "x6=" + (num*6) + "<br/>");
// document.write( num + "x7=" + (num*7) + "<br/>");
// document.write( num + "x8=" + (num*8) + "<br/>");
// document.write( num + "x9=" + (num*9) + "<br/>");
// document.write( num + "x10=" + (num*10) + "<br/>");


// Question 6
// var sub1 =prompt("Write 1st subject.");
// var sub2 =prompt("Write 2nd subject.");
// var sub3 =prompt("Write 3rd subject.");
// var totalMarks = 100;
// var obt1 =+prompt("obtained marks of " + sub1);
// var obt2 =+prompt("obtained marks of " + sub2);
// var obt3 =+prompt("obtained marks of " + sub3);
// var per1 = (obt1 / totalMarks) * 100;
// var per2 = (obt2 / totalMarks) * 100;
// var per3 = (obt3 / totalMarks) * 100;
// var finalMarks = totalMarks * 3;
// var totalObt = obt1 + obt2 + obt3;
// var totalPer = (totalObt / finalMarks) * 100;


//   document.write("<table cellspacing='0' cellpadding='8'>");
//   document.write("<tr>");
//     document.write("<th>Subject</th>");
//     document.write("<th>Total Marks</th>");
//     document.write("<th>Obtained Marks</th>");
//     document.write("<th>Percentage</th>");
//     document.write("</tr>");

//   document.write("<tr>");
//     document.write("<td>" + sub1 + "</td>");
//     document.write("<td>" + totalMarks + "</td>");
//     document.write("<td>" + obt1 + "</td>");
//     document.write("<td>" + per1.toFixed(0) + "%</td>");
//     document.write("</tr>");

//       document.write("<tr>");
//     document.write("<td>" + sub2 + "</td>");
//     document.write("<td>" + totalMarks + "</td>");
//     document.write("<td>" + obt2 + "</td>");
//     document.write("<td>" + per2.toFixed(0) + "%</td>");
//     document.write("<tr/>");

//       document.write("<tr>");
//     document.write("<td>" + sub3 + "</td>");
//     document.write("<td>" + totalMarks + "</td>");
//     document.write("<td>" + obt3 + "</td>");
//     document.write("<td>" + per3.toFixed(0) + "%</td>");
//     document.write("</tr>");
      

//       document.write("<tr>");
//     document.write("<td>" + "Total" + "</td>");
//     document.write("<td>" + finalMarks + "</td>");
//     document.write("<td>" + totalObt + "</td>");
//     document.write("<td>" + totalPer.toFixed(0) + "%</td>");
//     document.write("</tr>");

//     document.write("</table>");