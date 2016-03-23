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
