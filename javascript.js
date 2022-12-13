let message;
message = 'Hello'; // store the string 'Hello' in the variable named message


let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"


let ourPlanetName = "Earth";
let currentUserName = "John";

//Write a function called multiply that takes 2 numbers and returns their product.

script>
function capitalize(animal) {
   return animal * number
 }

 console.log(capitalize(3, 10))
  </script>



//Write a function called capitalize that takes a string and returns that string with only 
//the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
script>
function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

 console.log(capitalize("hello"));
  </script


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"
script>
function lastLetter(string) {
   return string[string.length - 1]
  
 }

 console.log(lastLetter("abcde"));
  </script>