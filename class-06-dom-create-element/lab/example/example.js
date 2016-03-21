/* Adapt the modified content in the script tags below inside your JavaScript
Basically, the "document.getElementById" part wires the JS to a particular element in the HTML.
Then, you use the "textContent" property of that element to replace the text that is in the HTML. That now takes the place of the alert() that we were using before.
*/

//You'll need one of these for each answer
var pTagOne = document.getElementById('ans-one');

var userInput = prompt('Did Sam live in South Dakota for 8 years?');
if (userInput.toLowerCase() === 'n' || userInput.toUpperCase() === 'NO') {
  // alert('You\'re right! Sam never lived in South Dakota!');
  // The alert() is replaced with the following line
  pTagOne.textContent = 'You\'re right! Sam never lived in South Dakota!';
} else if (userInput.toLowerCase() === 'y' || userInput.toUpperCase() === 'YES') {
  // alert('Nope! Sam never lived in South Dakota!');
  // The alert() is replaced with the following line
  pTagOne.textContent = 'Nope! Sam never lived in South Dakota!';
} else {
  // This error-correction can stay as an alert
  alert('Please give a yes or no answer.');
}
