# objects demo

**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Object Demo</title>
  </head>
  <body>
    <h1>Object Demo</h1>
    <script src="app.js"></script>
  </body>
</html>
```   

**app.js**
``` javascript
console.log('you have javascript');

// this is an empty array - it is also an array literal
var emptyArray = [];

// this is an empty object - it is also an object literal
var emptyObject = {};

// we use arrays when we have a list of information of the same type and purpose

// we use objects when we need to group information with varied type, or purpose
// we give values stored on obejcts context by naming the objects properties

// properties are "keys" that we can add to an object and store values inside of
// we can add propertys by assigning values to an object by using dot notation
var todoNoteOne = {};
todoNoteOne.name = 'slug';
todoNoteOne.date = new Date();
todoNoteOne.text = 'Today i want to make real pizza not just frozen pizza';

// we can also write out the intire object by hand and that is called an object literal
var todoNoteTwo = {
  name: 'slug',
  date: new Date(),
  text: 'some super aweseome idea that no 1 knows yet'
};

// creating another empty object
var groceryNoteOne = {};
// adding propertys to an object using dot notation
todoNoteOne.name = 'slug';
todoNoteOne.date = new Date();
todoNoteOne.text = 'milk';

// creating another object literal
var groceryNoteTwo = {
  name: 'slug',
  date: new Date(),
  text: 'soylent'
};

// we can store objects in an array 
// here we are createing a list of note objects that share simular information
var todoList = [todoNoteOne, todoNoteTwo]; // todo notes
var gorceryList = [groceryNoteOne, groceryNoteTwo]; // grocery notes

// here we are storing our groceryList and todoList in an object.
// by using good property names it is easy to tell what infromation
// is in each list.
var myLists = {
  gorceryList: gorceryList,
  todoList: todoList
};
```   

