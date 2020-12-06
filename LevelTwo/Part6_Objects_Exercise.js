// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////
console.log("HOLAs");
// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:function(){
    console.log(this.name.length);
  }
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.

function nameLength(emoployee){
  console.log(employee["name"].length);
}
nameLength(employee)

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report:function(){
    alert("Name is "+this.name+", Job is "+this.job+", Age is "+this.age)
  }
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
function alertKeyPair(employee){
  for(k in employee){
    alert(k+" is "+ employee[k])
  }
}
alertKeyPair(employee)

///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName:function(){
    console.log(this.name.split(" ")[1]);
  }
}
employee.lastName()
// Add a method called lastName that prints
// out the employee's last name to the console.
function LastName(employee){
  var aux = employee["name"].split(" ");
  console.log("Last Name: "+aux);
}
// LastName(employee)


// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
