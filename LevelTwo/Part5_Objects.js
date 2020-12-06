// Objects are hash-tables (dictionaries in python), the are not ordered (JSON)
var carInfo = {
  type : "Fiat",
  model : "500",
  color : "white"
};
// you need to pass a String to get de value
carInfo["type"]

//See th Object carInfo
console.dir(carInfo)

// Iterating an Objects
for (key in carInfo){
  console.log(key);
  console.log(carInfo[key]);
}
