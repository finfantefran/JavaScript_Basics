//
var petName = "";
var firstName = "";
var lastName = "";
var height = null;

//
firstName = prompt("First name?")
lastName = prompt("Last name?")
height = prompt("How tall are you?")
age = prompt("How old are you?")
petName = prompt("Pet name?")


//
if (firstName[0] === lastName [0] && 20 < age < 30 && height >= 170 && petName[petName.length-1] === "y"){
  console.log(firstName+" "+lastName)
  console.log(age+" years old")
  console.log(height+" cm tall")
  console.log("Pet name is "+petName)
}
