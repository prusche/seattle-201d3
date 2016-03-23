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
