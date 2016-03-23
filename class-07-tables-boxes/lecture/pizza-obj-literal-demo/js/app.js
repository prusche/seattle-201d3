// genorate a random number between eather those numbers, it is posilbe for it to return that number
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create a function that adds store data to a locations hourlyData array
function addHourlySalesDataToLocation(storeLocation, time, pizzasSold, deliveriesMade){
  storeLocation.hourlyData.push({
    time: time,
    pizzasSold: pizzasSold,
    deliveriesMade: deliveriesMade,
    driversNeeded: Math.ceil(deliveriesMade / 3)
  });
}

function displayHourlyDataList(storeLocation){
  // if there is an item on the page that has an id of "storeLocation"
  // fetch data from storeLocation create list items and add them to the page
  console.log('lullll wat');
  var storeLocationUL = document.getElementById(storeLocation.name);
  if (storeLocationUL){
    var eightOclockLi;
    for (var i = 0; i < storeLocation.hourlyData.length; i++ ){
      eightOclockLi = document.createElement('li');
      eightOclockLi.textContent = storeLocation.hourlyData[i].time + ' pizzas sold: ' + storeLocation.hourlyData[i].pizzasSold;
      storeLocationUL.appendChild(eightOclockLi);
    }
  }
}

function displayTotalPizzasSold(storeLocation){
  // if there is an item on the page that has an id of storeLocation.name + '-total'
  // calculate the toatal pizzas sold and display the results
  var totalPizzasSold = 0 ;
  console.log('enter function getPizzasSold');
  for (var i = 0; i < storeLocation.hourlyData.length; i++){
    totalPizzasSold += storeLocation.hourlyData[i].pizzasSold;
  }
  var storeTotalHeading = document.getElementById(storeLocation.name + '-total');
  if (storeTotalHeading){
    storeTotalHeading.textContent = storeLocation.name + ' sold ' + totalPizzasSold + ' pizzas.';
  }
}

// create a new location for ballard data
var ballard = {
  name: 'ballard',
  hourlyData: []
};

// add data to ballard for 8am - 11am
addHourlySalesDataToLocation(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '9:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '10:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
addHourlySalesDataToLocation(ballard, '11:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));


// display total pizzas sold if there is a element with a ballard-total id
displayTotalPizzasSold(ballard);

// display list of ballard hourly data if there is a ul with a ballard id
displayHourlyDataList(ballard);
