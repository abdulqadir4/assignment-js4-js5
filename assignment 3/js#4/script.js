// Declare 3 variables in one statement
var variable1, variable2, variable3;

// Declare 5 legal variable names
var myVariable;
var my_Variable;
var $myVariable;
var myVariable123;
var myVariable_123;

// Declare 5 illegal variable names
// Illegal variable names usually start with numbers or contain special characters other than $ or _
// var 1stVariable; // starts with a number
// var my-Variable; // contains a hyphen
// var my Variable; // contains a space
// var myVariable@; // contains a special character other than $ or _
// var var; // reserved keyword

// Displaying rules in the browser
document.write("<h2>Variable names can only contain letters, numbers, $, and _.</h2>");
document.write("<p>For example $my_1stVariable</p>");

document.write("<h2>Variables must begin with a letter, $, or _.</h2>");
document.write("<p>For example $name, _name or name</p>");

document.write("<h2>Variable names are case-sensitive.</h2>");

document.write("<h2>Variable names should not be JavaScript reserved keywords.</h2>");
