#live css and list demo
**index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Lists and CSS Demo</title>
    <link rel="stylesheet" type="text/css" href="style.css"></link>
  </head>
  <body>
    <section>
      <h1>Unordered List</h1>
      <ul>
        <li>Javascript</li>
        <li>Google Chrome</li>
        <li>eslint</li>
        <li>atom</li>
        <li>bash</li>
      </ul>
    </section>
    <section>
      <h1>Ordered List</h1>
      <ol>
        <li>Graham</li>
        <li>Garrett</li>
        <li>Duncan</li>
      </ol>
    </section>
    <script src="app.js"></script>
  </body>
</html>
```   

**style.css**
``` css   
body {
  background-color: #88e8e8;
}
```   

**app.js**
``` javascript   
console.log('YAY javascript is fully loaded!');

var favoriteNumberGuess;

// while (favoriteNumberGuess !== 7){
//   favoriteNumberGuess = prompt('what is my favorite number?');
//   favoriteNumberGuess = parseInt(favoriteNumberGuess);
//
//   if (favoriteNumberGuess < 7){
//     console.log('sorr that to low');
//   } else if (favoriteNumberGuess > 7){
//     console.log('sorry thats to high');
//   } else if (favoriteNumberGuess === 7){
//     console.log('good job!');
//   } else {
//     console.log('you need to input a number');
//   }
// }

for(var i=0; true; i++){
  console.log('i is not ' + i);
}
```   

