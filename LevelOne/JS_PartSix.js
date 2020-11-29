// while loops
// Repetition of a block of code

var x = 0;
while (x < 5) {
  if (x === 3){
    console.log("X IS EQUAL TO 3")
    break;
  }
  console.log("x value: " + x);
  x += 1;
}


// loop that prints out numbers from 1 to 10
y = 1;
while (y <= 10){
  console.log("number: " + y)
  y += 1;
}


// for loops
// Execute code a specific number of times
// loop throough a number of times, loop through a JS object or through arrays

for(var i = 0; i <= 10; i++){
  console.log("Index: " + i)
}

// iterate through an array
array = [1,2,3,4,5,6,7]
for(var i = 0; i <= 6; i++){
  console.log(array[i])
}


// iterate through a String
var word = "FRANCISCO"
for(var i = 0; i < word.length; i++){
  console.log(word[i])
}
