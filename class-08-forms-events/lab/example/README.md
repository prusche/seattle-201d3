Lab EXAMPLES
============

**object-constructor-demo/index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Function Constructor</title>
  </head>
  <body>
    <h1>Function Constructor </h1>
    <p> Open the developer console inpect the ballard object</p>
  <script src="js/app.js" type="text/javascript"></script>
  </body>
</html>
```   

**object-constructor-demo/js/app.js**
``` javascript   
// define function for use later
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// a object constuctor is a template for a object
// they enable you to make many objects that have the same propetys and methods 
// declaring an object constructor looks like makeing a new function
// excepty that we name them with captol letters
function PizzaLocation(name){
  // we create properties with the object constructor using this.name = "what ever you want"
  this.name = name;
  this.hourlyData = [];
}

// we add methods to a object constuctor by adding functions to its prototype
PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyData.push(data);
}

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade /3);
}

// when we create a new object from this consturctor we have to use the 'new' keyword
var ballard = new PizzaLocation('ballard')
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('11:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('12:00 pm', 0, 4, 0, 4));
```   

**table-demo/js/app.js**
``` javascript   
console.log('does this workz?');

// how to crate an element..
// create an element
// set its attributes
// set its content
// add it to the dom

// create a table
// create a row add it to the table
// create th/td set there content add them to the row

// take in an array of strings and create a table row with td tags
function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

// take in an array of strings and create a table row with tr tags
function genorateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

// create a table
var peopleTable = document.createElement('table');

// create a row with th tags
var firstRow = genorateHeadingRow(['name', 'age', 'language']);

var secondRow = genorateDataRow(['dunc', '88', 'javascript']);
var thirdRow = genorateDataRow(['slug', '707', 'html']);
var fourthRow = genorateDataRow(['neo', '301', 'css']);

peopleTable.appendChild(firstRow);
peopleTable.appendChild(secondRow);
peopleTable.appendChild(thirdRow);
peopleTable.appendChild(fourthRow);

document.getElementById('table-demo').appendChild(peopleTable);





// var rowOne = document.createElement('tr');
// peopleTable.appendChild(rowOne);
// var rowOneColOne = document.createElement('th');
// rowOneColOne.textContent = "Name";
```   

