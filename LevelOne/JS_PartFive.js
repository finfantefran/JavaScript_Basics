// Examples of if statement, else if, else

var hot = false;
var tmp = prompt("actual temp?")

if (tmp > 30){
  hot = true;
  console.log("tmp is hot")
} else if (tmp > 20){
  console.log("It is not very hot")
} else {
  console.log("It is cold")
}

//
var ham = 10;
var cheese = 10;
var report = "blank";

if (ham >= 10 && cheese >= 10){
  report = "Strong sales of both"
} else if (ham === 0 && cheese === 0) {
  report = "No sales"
} else {
  report = "we have some sales!"
}

console.log(report)
