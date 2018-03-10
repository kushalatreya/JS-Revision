//This will be the script
/*
//1.case sensitive

var test = "This is a test"
var Test = "This is another test"
// Test would overwrite test, if var was not case-sensitive.
alert(test);

//2.Arrays

var food = ["momo", "pizza", "burger"];
alert(food[1]);//this will start numbering from 0,1,2 so it will show pizza for [1]

//another way to Array
var Food = new Array("Momo", "Pizza", "Burger");//adding the Arrays
//Food[3] = "moreMomo";
Food.push("more Momo");//methods
alert(Food[3] + " and " +Food[1]);

var numbers = [0,5,7,1,3];
alert(numbers[1] + numbers[3]);
alert(numbers.length);//this will show the length
alert(numbers.sort());//this will sort the numbers, others: reverse

//3.loops
for(var i = 0; i <= 10; i++){
  console.log("string " + i);

var i = 0;
while(i <= 10){
  console.log("string " + i);
  i++;
}
}

//4.conditional
var test1 = 3;
var test2 = 4
if (test1 == test2 || test1 == 3){
  console.log("this is true")
}
else {
  console.log("this is false")
}

var fruit = "apple";
switch (fruit) {
  case "banana":
  alert("I hate banana");
    break;
  case "mango":
  alert("I love mango")
      break;
  case "apple":
  alert("two please.")

    break;
  default:
  alert("no special condition")
}*/

//5.Objects
var person = {
  firstName: "kushal",
  lastName: "Atreya",
  age: 22,
  address:{
    street: "Kaajanintie",
    PostalCode: "90130",
    State:"Toronto",
  },
  skills: ["JavaScript","HTML5","CSS"],
  fullName: function(){
    return this.firstName;
}

//console.log(person.address.street);
console.log(person.fullName());
