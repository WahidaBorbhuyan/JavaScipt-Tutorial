//Strings act same like arrays in JavaScript. You can access each character of a string using its 
// index. The index starts from 0 for the first character, 1 for the second character, and so on. 
// You can also use negative indexing to access characters from the end of the string, where -1 
// refers to the last character, -2 to the second last character, and so on.

//Example 1: Accessing characters in a string
let str = "Hello, World!";
console.log(str[0]); // Output: H
console.log(str[7]); // Output: W
console.log(str[-1]); // Output: undefined (negative indexing is not supported in JavaScript)

//Example 2: Using string methods
let message = "JavaScript is awesome!";
console.log(message.length); // Output: 22
console.log(message.toUpperCase()); // Output: JAVASCRIPT IS AWESOME!
console.log(message.toLowerCase()); // Output: javascript is awesome!
console.log(message.indexOf("is")); // Output: 11
console.log(message.slice(0, 10)); // Output: JavaScript

//Example 3: Iterating through a string
for (let i = 0; i < message.length; i++) {
    console.log(message[i]);
}

//Example 4: Checking if a string includes a substring
let text = "I love programming in JavaScript.";
console.log(text.includes("programming")); // Output: true
console.log(text.includes("Python")); // Output: false

//Example 5: Replacing a substring in a string
let newText = text.replace("JavaScript", "Python");
console.log(newText); // Output: I love programming in Python.

//Example 6: Splitting a string into an array
let fruits = "apple,banana,cherry";
let fruitArray = fruits.split(",");
console.log(fruitArray); // Output: ["apple", "banana", "cherry"]

//Example 7: Joining an array into a string
let joinedFruits = fruitArray.join(" & ");
console.log(joinedFruits); // Output: apple & banana & cherry

//Example 8: Trimming whitespace from a string
let spacedString = "   Hello, World!   ";
console.log(spacedString.trim()); // Output: Hello, World!

//slice() method can be used to extract a portion of a string and return it as a new string.
let slicedString = message.slice(0, 10);
console.log(slicedString); // Output: JavaScript

//convert string to number using parseInt() or parseFloat()
let numString = "42";
let num = parseInt(numString);
console.log(num); // Output: 42

//convert number to string using toString()
let number = 100;
let strNumber = number.toString();
console.log(strNumber); // Output: "100"

let day = "Monday";
let Quote = "Every weekday is dreadful, but " + day + " is the worst.";
let val = Quote.indexOf("day"); 
console.log(val); //output : 10
count = 0 
for (let i = 0; i < Quote.length; i++) {
    if (Quote.includes("day")) {
        count++;
    }
}
console.log(count); //output : 1    
