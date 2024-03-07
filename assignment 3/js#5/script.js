// Task 1: Addition
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Task 1: Addition<br>");
document.write("Result: " + sum + "<br><br>");

// Task 2: Subtraction
var difference = num1 - num2;
document.write("Task 2: Subtraction<br>");
document.write("Result: " + difference + "<br><br>");

// Task 3: Multiplication
var product = num1 * num2;
document.write("Task 3: Multiplication<br>");
document.write("Result: " + product + "<br><br>");

// Task 4: Division
var quotient = num1 / num2;
document.write("Task 4: Division<br>");
document.write("Result: " + quotient + "<br><br>");

// Task 5: Modulus
var remainder = num1 % num2;
document.write("Task 5: Modulus<br>");
document.write("Result: " + remainder + "<br><br>");

// Task 6: Mathematical Expressions
var variable;
document.write("Task 6: Mathematical Expressions<br>");
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var remainderAfterDivision = variable % 3;
document.write("The remainder after dividing the variable's value by 3 is: " + remainderAfterDivision + "<br><br>");

// Task 7: Cost of movie tickets
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Task 7: Cost of Movie Tickets<br>");
document.write("Total cost of buying 5 tickets: " + totalCost + " PKR<br><br>");

// Task 8: Multiplication table
var number = 7;
document.write("Task 8: Multiplication Table of " + number + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br>");

// Task 9: Temperature Converter
var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write("Task 9: Temperature Converter<br>");
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

fahrenheitTemperature = 86;
celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C<br><br>");

// Task 10: Shopping Cart
var priceItem1 = 500;
var priceItem2 = 300;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 50;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("Task 10: Shopping Cart<br>");
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("Total cost: " + totalCost + " PKR<br><br>");

// Task 11: Percentage Calculator
var totalMarks = 500;
var marksObtained = 450;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Task 11: Percentage Calculator<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");

// Task 12: Currency Converter
var dollars = 10;
var saudiRiyals = 25;
var exchangeRateDollarToPkr = 104.80;
var exchangeRateRiyalToPkr = 28;
var totalCurrencyInPkr = (dollars * exchangeRateDollarToPkr) + (saudiRiyals * exchangeRateRiyalToPkr);
document.write("Task 12: Currency Converter<br>");
document.write("Total currency in Pakistani Rupees: " + totalCurrencyInPkr + " PKR<br><br>");

// Task 13: Arithmetic Operations
var number = 10;
var result = (((number + 5) * 10) / 2);
document.write("Task 13: Arithmetic Operations<br>");
document.write("Result: " + result + "<br><br>");


var currentYear = 2024;
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("Task 14: Age Calculator<br>");
document.write("They are either " + age1 + " or " + age2 + " years old<br><br>");

var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("Task 15: Geometrizer<br>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) + "<br><br>");

var favoriteSnack = "Chocolate";
var currentAge = 30;
var maximumAge = 80;
var amountPerDay = 2;
var yearsRemaining = maximumAge - currentAge;
var totalSnacksRequired = yearsRemaining * 365 * amountPerDay;
document.write("Task 16: Lifetime Supply Calculator<br>");
document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + " to last you until the age of " + maximumAge + "<br>");
