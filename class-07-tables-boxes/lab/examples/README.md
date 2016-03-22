PIZZA 3000 Example Code
=======================

**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Pizza Examples</title>
  </head>
  <body>
    <header id="body-header">
    </header>
    <script src="example.js"></script>
  </body>
</html>
```   

**example.js**
``` javascript   
// create an element and add it to the end of the dom
// 1) create the element 
var ptag = document.createElement('p');

// 2) set the content and/or any atributes
// to set an atribute use .setAttribute(<atributeName>, <atributeValue>)
ptag.setAttribute('id', 'firstPTag');
// set the content
ptag.textContent = 'hello world';

//3) add the tag to the body
document.body.appendChild(ptag);

// add an element to a tag with an id on the page
// 1) get a reference to the element in the dom using getElementById(<id>)
var bodyHeader = document.getElementById('body-header');

// 2) create a new element
var pageHeading = document.createElement('h1');
pageHeading.textContent = 'best page heading ever!';

// 3) add the element to the element with the id 
bodyHeader.appendChild(pageHeading);


// how to genorate a random number between two numbers
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```   

