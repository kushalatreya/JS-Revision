//setting the variable age at first and prompt opens the diaglogue box and asks for the age, var saves the data for later use.
var age = prompt("what is your age?")
/* nice example of concatination. we use just prompt to show the age after inserting the 
text and multiplication method.
*/

//prompt( "you are roughly " + age * 365 * 24 + " " + " hours Old.");

// its always better to calculate all the the things and save it in var then print.

var ageCount = age * 365.25; 
alert( "you are roughly " + ageCount + "days old");

// 365.25 accounts for the leap year that happens every 4 years.
