///LOOP EXERCISES

///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
// Do this with a While Loop and a For Loop

// While Loop
var i = 0;
while(i <= 4){
  console.log("Hello")
  i++
}

// For Loop
for(i = 0; i < 5; i++){
  console.log("Hello");
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
i = 1;
while(i <= 25){
  if (i%2 !== 0){
    console.log("Odd number: "+i);
  }
  i++
}

// METHOD TWO
// For Loop
for (i = 1; i <= 25;  i++){
  if (i%2 !== 0){
    console.log("Odd number: "+i);
  }
}
