
// declaration of a basic function
function hello(){
  console.log("hello world!");
}
// call
hello()
// function hello
console.log(hello);

//
function hello2(name){
  console.log("hello " + name);
}
hello2("Fran")

// you can add default values to params like in python
function helloSomeone(name = "Eduardo") {
  console.log("Hello " + name)
}
helloSomeone()
helloSomeone("Fran")

// return
function sum(num1 = 0,num2 = 0) {
  // Local scope to the function
  var aux = num1 + num2
  return aux
}
// Global scope
var result = sum(1,2)
console.log("Result: "+result);
