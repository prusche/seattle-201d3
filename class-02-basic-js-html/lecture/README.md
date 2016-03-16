symantic html && user-input
===========================

# symantic-html-demo

**symantic-html-demo/index.html**
``` html   
<!DOCTYPE html>
<html>
  <head>
    <title>Semantic HTML</title>
  </head>
  <body>
    <header>
      <h1>Welcome to Semantic HTML!</h1>
      <q>Semantic html if a fight against disorder and chaos on the world wide web</q> <strong>-Slug</strong>
    </header>
    <article>
      <section>
        <h1>Wizzards</h1>
        <p>are kinda a <em>bad</em> idea.</p>
        <h2>Magic and Spells</h2>
        <p>I dont think there is <em>any</em> evidence that there is not magic, but i still dont think there is wizzards.</br>I think <em>benton green</em> argrees with me.</p>
      </section>
      <section>
        <h1>Slugs</h1>
        <p>true evidence of magic. there was a publication, <cite>magic slugs: slime from the stars</cite> by <em>Benton Green</em>, that documents early folk lore about slugs bringing fruit to the trees. </p>
      </section>
    </article>
    <footer>
      <p>Slugbyte 2016 &copy;</p>
    </footer>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```   

**symantic-html-demo/app.js**
``` javascript   
// prompt the user for input and store their results in fluffyBunnyCount
// prompt will allways return a string
var fluffyBunnyCount = prompt('how many marshmellows can you eat and say fluffy bunny?');

// pass the string in fluffyBunnyCount into parseInt to turn it in to a number
// store the number returned from parseInt back into the fluffyBunnyCount variable
fluffyBunnyCount = parseInt(fluffyBunnyCount);
if (fluffyBunnyCount < 15){
  console.log('hurray!');
} else {
  console.log('booo');
}

// prompt the user for input and store their results in agreeWithConditions
var agreeWithConditions = prompt('do you agree with me? yes or n');

// check if the user input.toUpperCase == 'YES'
if(agreeWithConditions.toUpperCase() === 'YES'){
  console.log('hurray again!');
} else {
  console.log('boo again!');
}

// what will typeof(thing) return when you pass it different values 
console.log('typeof(boolean): ', typeof(true));
console.log('typeof(num)    : ', typeof(1));
console.log('typeof(string) : ', typeof('wat'));
console.log('typeof(array) : ', typeof([]));
console.log('typeof(object) : ', typeof({}));
console.log('null: ', typeof(null));
```   

