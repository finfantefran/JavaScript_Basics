// Booleans
true
false

// Greater than
3 > 2;
1 < 2;

// Less than
2 < 1;

// Greater than or equal to
2 >= 2;

// Less than or equal to
1 <= 3;

// Equality
2 == 2;
"user" == "user";

// Inequality, same as ==
2 != 3;
2 !== "2";
// In JS you can compare a String and a int or a float like it was a String
"2"==2;

// If you dont want to distinguish between data types
"2"===2;

// true == 1; --> true
// trie === 1; --> false
//  false === 0; --> false
//  false == 0; --> true
//  null == undefined; --> true
//  null === undefined --> false

// AND operator &&
1 == 1 && 2 == 2;
// OR operator ||
1 == 1 || 2 == 1;

 // NOT operator, you cna stack this operator
 !(1 === 1);


var x = 1;
var y = 2;

// Exercise 1
"2" == y && x == 1; // true

// Exercise 2
x >= 0 || y == "2"; // true

// Exercise 3
!(x !== 1) && y === (1+1); // true

// Exercise 4
y !== "2" && x < 10; // true

// Excercise 5
y !== x || y == "2" || x === 3; // true
