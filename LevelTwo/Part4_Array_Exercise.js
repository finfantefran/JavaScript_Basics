// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = ["Manuel","Javier"];

// Create the functions for the tasks

// ADD A NEW STUDENT
roster.push("Fran");
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(){
  var name = prompt("What name would you like to add?")
  roster.push(name);
}
// REMOVE STUDENT
roster.pop();
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(){
  var name = prompt("What name would you like to remove?")
  for(i in roster){
    if(name === roster[i]){
      roster.splice(i,1);
    }
  }
}

function remove2()){
  var remName = prompt("What name would you like to remove?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

// DISPLAY ROSTER
display()
// Create a function called display that prints out the roster to the console.
function display(){
  for(i of roster){
    console.log(i);
  }
}


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr){
        console.log(value);

        return value > 5;
    });
console.log(filtered);
// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var response = prompt("Would you like to start the roster web app? y/n")
var aux = ""
if (response == "y"){
  while(aux != "quit"){
    aux = prompt("Please select an action: add, remove, display, or quit.")
    if (aux == "add"){
      addNew();
    }
    if(aux == "remove"){
      remove();
    }
    if(aux == "display"){
      display()
    }
  }
}
