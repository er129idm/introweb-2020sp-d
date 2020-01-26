/*
  NOTE:
  In Javascript you can comment a single line with two slashes,
  or create a block-comment with this slash+asterisk syntax.
*/

//////////////////// Console + Alert ////////////////////

//// sending messages to the developers console
console.log("Trick or Treat!"); //included a string in quotation marks

//// Popping open an alert window
// alert("Boo!");

//////////////////// Variables / Types ////////////////////

/*
  What is a variable?
  a place to store data:
  string, integers (whole numebrs) & floats(decimal), boolean(true/false)
*/

//// defining variables
//// string: uses quotation marks to literally mark a string

var firstName = "Happy";
var lastName = "Halloween";
var space = " ";

//// concatinating variables

console.log(firstName);
console.log(firstName + " " + lastName); //option 1 for creating a space
console.log(firstName, lastName); //option 2
console.log(firstName + space + lastName); //option 3
console.log(firstName + lastName);

//// storing integers

var num1 = 5;

//// storing floats

var num2 = 5.4;
var num3 = 4;
console.log(num1 + num2 + num3);

//// 55.44-concatination if we don't use parenthesis
//// 59.4-math if parenthesis are added to num2 + num3

/*
  math:
  addition +
  subtraction -
  multiply *
  divide /
*/

//////////////////// Arrays ////////////////////

//// creating arrays
//// what is an array? an array is a COLLECTION of items

/*
  NOTE:
  Items in an array are referenced by their "index"
  which starts at ZERO, not ONE.
*/

var firstArray = ["spooky", "scary", "haunted", "spectral", "dark"];
var secondArray = ["pumpkin", "little ghost", "cat", "bat", "zombie", "candy"];

//// Print entire array...
// console.log(firstArray); //console log of the full array
// console.log(secondArray);

//// Print one item from the array...
console.log(firstArray[1]);
console.log(secondArray[0]);
//scary
//little ghost

//////////////////// LOGIC with CONDITIONALS ////////////////////

/*
  Set up control flow with if/else statements
  < or >
  <= or >=
*/

//// js accepts equality as == or ===. When you use === you are ensureing TRUE equality.

var num = 2;

if (num === 15){
   console.log('you have the correct number!')
} else if (num > 15){
   console.log('your number is too big')
} else{
   console.log('please choose another number')
}

//////////////////// FUNCTIONS ////////////////////

/*
  There are many functions in JavaScript for modifying values, math, etc...
*/

//// Random FLOAT from 0-1
// console.log(Math.random());

//// Random FLOAT from 0-50
// console.log(Math.random() * 50);

//// Random INTEGER from 0-length of an array, giving us an INDEX...
var secondArray = ["pumpkin", "little ghost", "cat", "bat", "zombie", "candy"];
var randomIndex = Math.floor( Math.random() * secondArray.length );
console.log(randomIndex);

//// Random item from array using our random index
console.log(secondArray[randomIndex]);


//////////////////// CUSTOM FUNCTIONS ////////////////////

/*
  to make a procedure, set of instructions that make things easier
  compartamentalize setting up a small machine that performs a simple procedure
*/

//// Setting it up

function sayHello() {
    console.log('hellooooo!');
}

//// Calling the function

sayHello();

//// Setting up a function with arguments / parameters

function addNumber(numberOne, numberTwo){
    console.log("Result: " + (numberOne + numberTwo));
}

//// Calling the addNumber function

addNumber(40, 60);

//// RETURNING values from a function

function addNumberAndReturn(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

console.log(addNumberAndReturn(400,200));

//////////////////// LOGICAL OPERATORS ////////////////////

/*
  create a function that acts like a virtual door
  if we call door #1, we will return Hall of Mirrors
  if we call door #2, we will return Mummy Bathroom
  if we call door #3, we will return Witchy Kitchen
*/

//// function that contains an if/else statement
//// test each of your doors by calling the function at least 3 times

function door(num){
  if (num === 1){
    return "Hall of Mirrors";
  }
  else if (num === 2){
    return "Mummy Bathroom";
  }
  else if (num === 3){
    return "Witchy Kitchen";
  }
  else {
      return "There are only 3 doors!";
  }
}

console.log(door(1));
console.log(door(2));
console.log(door(3));
console.log(door(5));
