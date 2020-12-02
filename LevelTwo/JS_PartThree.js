 // Arrays


// Array is mutable
countries = ["USA","Germany","France"]
countries[0] = "Spain"

// Strings are not mutable
country1 = "Italy"
// country1[0] = "A"  not posible



// mix datatypes in Arrays

var mixed = [true, 20, "string"]
mixed.length

// remove last item from Array, pop() removes and returns the value
var lastItem = mixed.pop()

// add a item to the Array
mixed.push("string")

// index last item
mixed[mixed.length-1]

// matrix, nested Arrays
matrix = [[1,2,3],[1,2,3]]

// Iterating
arr=["A","b","c"]

for(var i = 0;i < arr.length;i++){
  console.log(arr[i]);
}

// letter = index
for(letter in arr){
  console.log(letter);
}

// letter = values of arr
for(letter of arr){
  console.log(letter);
}

// use a functiuon for each value of the Array
arr.forEach(alert);

// Applying the function addComment to each elemment of arr
function addComment(name){
  console.log(name+" is awesome.");
}

arr.forEach(addComment)
