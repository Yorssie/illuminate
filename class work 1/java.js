comments: // single-line comments- this is a single-line comment.
/* multi-line comments 
this is a multi line comment
*/
// DATA TYPES:
/* String: Javascript text values; characters must be enclosed in either single or double quotes."" ''
 Number: javascript numerical values
  Boolean: The Boolean data type has only two values: True > or False < ; Boolean is useful for making
....decisions.  to determine if two compared values are the same.
   Null: The Absence of a value
   Undefined: A variable not yet assigned a value.
   Bigint: A data type that accomodates a greater range of numbers.It is like an extra large box that can 
   .....accomodate a much greater range of numbers than the number data type.
   Symbol: It is a data type used as a unque identifier. Think of it as having multiple boxes with the same
   .....label and using different serial numbers to avoid mixing them up.
   decimal numbers in JavaScript are also known as floating numbers or floats.

   OPERATORS: Operators are used to perform operations on variables and values. An operator is used to 
   .....manipulate individual data items and return a result.
   Assignment operators (=) To assign a value to a variable. You use assignment operators for simple and 
   .....complex calculations.
   Arithmetic operators: Addition operator (+), Minus operator (-), Division operator (/), muliplication
   .....symbol (*).
   Comparison operators: compares and returns a logical value based on whether the comparison is true.
   .....They are: Greater than(>), Less than (<), Equal to (==), Not equal to (!=) 
   == is an equality operator.
   === this is the strict equality operator that has three equal signs and it checks for both the value and typ
   != is called the inequality operator. it is the opposite of the equality operator.

   Logical operators: They are used in JavaScript to determine if something is true or false.
   ..... and(&&)- Checks the two or more are conditions are true. e.g a>5 && a<10
   ..... Or(||)- Checks for at least one condition to be true. e.g a>5 || a>10
   .....Not(!)- Returns a false value if thr result is true. e.g !(a>5).
   var, let, const
   var:is going to be able to use throughout your program.
   let:will only be used within the scope of where you declared that.
   const:is a variable that should never change. it can't chnage.
   note: there is a difference between declaring variables and assigning variables.
   initializing a variable also means giving it a value or assigning it a value. e.g var a = 5
   

*/
// Number data type: Foundational data type that represents integers and decimal points.
// parentheses ()


// console.log(20 + 20);
// console.log(3>2);
// console.log(10==10);
// console.log(9%4);
// console.log(40>20 && 40<100);
// console.log(40>30 || 40<20);
// console.log(40**2);
// console.log(!(40>20));

/* Logical AND operator: &&: it is used to confirm if multiple comparisons will return true. in Javascript,
this operator consists of two ampersand symbols together: &&
example: 

Logical OR operator : ||
Logical NOT operator : !
The modulus operator : %
The equality operator : ==
The strict equality operator : ===
The inequality operator : !=
The strict inequality operator : !==
The addition assignment operator : +=
The concatenation assignment operator : +=(it's the same as the previous one) */
// //  LOGICAL AND OPERATOR:
var currentTime = 10;
console.log(currentTime > 5 && currentTime < 20);
// The && logical operator returns a single value: the boolean, true or false, based on the ff rules:
// ..... it returns true if both the values on its right and its left are evaluated to true. it returns 
// false in other instances.
/* THE LOGICAL OR OPERATOR: || - It is used when you want to check if at least one of the given comparisons
evaluates to true. */
var currentTime = 7
console.log(currentTime < 9 || currentTime > 12);
//  the logical OR OPERATOR will always return true, except when both sides evaluate to false. 
// The logical NOT operator : ! - it can be seen as a switch, which flips the evaluated boolean value from 
// .....from true to false and from false to true.
var petHungry = true
console.log('Feeding the pet');
console.log("Pet is hungry:", !petHungry);
console.log(petHungry);
var petHungry = true
petHungry = !petHungry;
// THE MODULUS OPERATOR: IT RETURNS THE REMAINDER OF A DIVISION.
console.log(22 % 5);
// THE EQUALITY OPERATOR:checks if two values are equal.(==)
console.log(5==5);
console.log(5==6);
console.log(5=="5"); 
// the equality operator compares values but not the types.
// THE STRICT EQUALITY OPERATOR(===): This operator compares for both data types and values.
console.log(5==="5");
// THE INEQUALITY OPERATOR (!=): Checks if two values are not the same but not the data type.
console.log(5!="5");
// in the above example, we are saying 5 isnt equal to 5, regardless of the data type
// THE STRICT INEQUALITY OPERATOR(!==)
console.log(5!==5);
console.log(5!=="5");
// USING THE + OPERATOR ON STRINGS AND NUMBERS.
console.log("inter" + "net");
/* when used to join strings, it is referred to as THE CONCACTENATION OPERATOR, when used with numbers,
 it is called THE ADDITION STRINGS. You can also combine a string and a number, using the + operator.e.g:*/
 console.log(365 + " days");
 console.log(12 + " months");
 /* in the above, JavaScript helps to convert thr numbers to strings, concactenates the numer and string toget
 her, ending up with a string value. This process is called COERCION.JavaScript coerces a number value to a s
 string value.*/
 console.log(2 + "2");
 console.log(2 + 2);
//  THE ADDITION ASSIGNMENT OPERATOR (+=): This is used when one wants to accumulate the value stored in a variable
var overtime = 10
overtime += 15
overtime += 7
overtime += 4
console.log(overtime);
// using the addition assignment operator reduces the lines of our code.
// THE COCACTENATION ADDITION ASSIGNMENT OPERATOR (+=) difference is in the data type used
var longString =  "";
longString += "coding";
longString += " with";
longString += " JavaScript";
longString += ".....";
console.log(longString);
/* OPERATOR PRECEDENCE AND ASSOCIATIVITY: Operator precedence is a set of rules that determines which operator
should be evaluated first. e.g 1 * 2 + 3 WILL GIVE 5 because the * OPERATOR HAS PRECEDENCE OVER THE + OPERATOR
operator associativity:determines how the precedence works when the code uses operators with the same preceden
ce. There are two kinds: left-to-right associativity and right-to-left associativity.  The assignment oper
ator is right to left associativity, while the greater than op is left to right.*/
// THE LOGICAL && OPERATOR
var score = 8
console.log("Mid-level skills:", score > 0 && score < 10);

var timeRemaining = 0
var energy = 10
console.log("Game Over:", timeRemaining == 0 || energy == 0);

var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0
console.log("is", num1, " an", " even", "number?", result1);
console.log("is", num2, " an", " even", "number?", result2);

var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d);

var counter = 0 
counter += 5
counter += 3
console.log(counter);

// CONDITIONAL STATEMENTS: "IF" and "ELSE" is used
var result = 50
if (result > 40) {
console.log("Congratulations You Passed!");
} else {
   console.log("Unfortunately, You did not pass.");
}

var food = "hot"
if (food == "hot") {
   console.log("Too hot");
} else if (food == "cold") {
   console.log("Too cold");
}
else{
   console.log('Just right');
}

var age = 10
if (age >= 65) {
   console.log("You get your income from your pension.");
} else if (age < 65 && age >= 18) {
   console.log("Each month, you get a salary.");
} else if (age < 18) {
   console.log("You get an allowance!");
} else{
   console.log("The value of the age is not numerical.");
}

// SWITCH STATEMENTS - Used to evaluate multiple conditions.
var day = "Sunday"
switch (day) {
   case 'Monday':
      console.log('Read a book');
      break;
      case 'Tuesday':
         console.log('Watch a movie');
         break;
         case 'Wednesday':
         console.log('Read a book');
         break;
         case 'Thursday':
         console.log('Play at the mall');
         break;
         case 'Friday':
         console.log('Socialize');
         break;
         case 'Saturday':
         console.log('Chill');
         break;
         case 'Sunday':
         console.log('Go To Church');
         break;
   default:
      console.log('There is no such day.');
      break;
}
// LOOPS- used to continually execute repeated blocks of code until a certain condition is satisfied.
// counter- counter must contain a specific value. it is common to use the letter 
// types of loops: FOR, WHILE, NESTED
// THE FOR LOOP- Var i = 0 (set the value), i<3(specify the condition), i++ ( increment the counter)
// for (var i = 1; i < 101; i++) {
// console.log(i);
   
// }
// the while loop is similar to the for loop 
// var i = 1
// while (i < 4) {
// console.log(i);
//    i=i+1;
// }
for (var i = 1; i <= 3; i++) {

   console.log(i);
}
console.log('Go');
for (var i = 1; i <= 5; i++ ) {
console.log(i);
}
console.log('Counting Completed!');
for (var i = 5; i > 0; i--) {
   console.log(i);
   }
   console.log('Countdown Finished!');
   var  i = 1
   while (i < 6) {
      console.log(i);
      i++
   }
console.log('Counting completed!');
var i = 5
while (i > 0) {
   console.log(i);
   i = i - 1
}
console.log('Counting completed!');
var year = 2018
while (year < 2023) {
   console.log(year);
   year++
}
//NESTED LOOPS: 
for (var i = 1; i <= 2; i ++) {
   for (var j = 1; j <= 5; j++) {
      console.log("Week " + i + " day " + j);
      
   }
   
}
for (var year = 2023; year < 2025; year++) {
   console.log(year);
   for (var month = 6; month < 9; month++) {
      console.log("-------------", month);
   }
}

for (var firstNum = 0; firstNum < 2; firstNum++) {
   // console.log(firstNum);
   for (secondNum = 0; secondNum < 10; secondNum++) {
      // console.log(secondNum);
      console.log(firstNum + " times " + secondNum + " equals");
   }
}
for (var i = 100; i > 10; i = i - 10 ) {
   for (var j = 10; j > 4; j = j - 5) {
      console.log(i + " divided by " + j + " equals " + i / j);
   }
}
   for (var i = 1; i <= 10; i++) {
      if (i == 1) {
         console.log("Gold medal");
      } else if (i == 2) {
         console.log("Silver medal");
      } else if (i == 3) {
         console.log("Bronze medal");
      }
      else console.log(i);
   }
   for (var i = 1; i <= 10; i++) {
      switch (i) {
         case 1:
            console.log("Gold medal");
            break;
      case 2 : 
            console.log("Silver medal");
            break
            case 3:
               console.log("Bronze medal");
               break
         default:
            console.log(i);
            break;
      }
   }
   /* Functions:values passed to functions are called arguments. we have function declaration(build) and funct
ion invocation (to call) */

function listArrayItems(arr) {
for (var i = 0; i < arr.length; i++) {
   console.log(i+1 , arr[i]);
}   
}
var colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink']
listArrayItems(colors)

function letterFinder(word, match) {
   for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
         console.log('Found the', match, 'at', i);
      } else {
         console.log('---No match found at', i);
      }
   }
}
   letterFinder("test", "t")
   //Objects : collections of related properties.

   // var storeManagerMovement = 4
   // var storeManagerSocialSkills = 50
   // var storeManagerStreetSmarts = 50
   // var storeManagerHealth = 30
         //   OR
   // var storeManager = {}
   // storeManager.socialSkills = 50;
   // storeManager.streetSmarts = 50;
   // storeManager.health = 30;
   
   // Arrays are objects: push- To add new items to an array, pop-to remove the last item from an array
   var storeManager =[]
   storeManager.push("health");
   storeManager.push("social skills");
   console.log(storeManager);
   storeManager.pop()
   console.log(storeManager);

   function arrayBuilder(one, two, three) {
      var arr = [];
      arr.push(one);
      arr.push(two);
      arr.push(three);
      console.log(arr);
   }
   arrayBuilder('objects', 'subjects', 'data')

   /* ITERABLE: Any datatype that can be iterated over using a FOR of LOOP. Some of the data types you can
   iterate over are ARRAYS AND STRINGS.*/
   var clothes = [];
   clothes.push('scarf');
   clothes.push('skirts');
   clothes.push('jeans');
   clothes.push('blazers');
   clothes.push('vintage');
   console.log(clothes);
   clothes.pop()
   console.log(clothes);
   clothes.push('cargo')
   console.log(clothes);
   console.log(clothes[2]);

   var favCar = {};
   favCar.color = 'red';
   favCar.convertible = true;
   console.log(favCar);
// adding methods to objects so far its another property of that object.
   var car = {};
   car.mileage = 98765;
   car.color = 'red'
   console.log(car);
   car.turnTheKey = function () {
      console.log("The engine is running");
   }
   car.lightsOn = function () {
      console.log("The lights are on.");
   }
   console.log(car);
   car.turnTheKey();
   car.lightsOn()
   /*TYPE OF: It is a JavaScript operator that evaluates a parameter and returns the name of the data type as
   a string. It is used to identify the Data type of elements in JavaScript.e.g:*/
   var test = typeof('what is this data type called?')
   var test = typeof(function abc() {
      console.log('abc');
   })
   console.log(test);
   // BUG:A bug causes a program to run in an unintended way.
   // ERROR: AN error causes a program to stop running. A faulty piece of code that prevents the program from
   // .....further execution, an error ges thrown and the program stops. we have SYNTAX ERROR, TYPE ERROR,
   // ...AND REFERENCE ERROR, RANGE ERROR.

  /* JavaScript try-catch block : It is a way to handle errors that may occur in JavaScript code.It allows you
  to catch and handle errors in a more graceful manner, rather than crashing the entire program.*/

  function addTwoNums(a,b) {
   try {
      if (typeof(a) != 'number') {
         throw new ReferenceError('the first argument is not a number')
      } else if (typeof(b) != 'number') {   
         throw new ReferenceError ('the second argument is not a number')
      } else {
         console.log(a + b); 
      }
   } catch (err) {
      console.log("Error!", err);
   }
}
addTwoNums (5, '5')
console.log("It still works!");

function letterFinder(word, match) {
   var condition1 = typeof(word) == 'string' && word.length >= 2
   var condition2 = typeof(match) == 'string' && match.length == 1
   if (condition1 && condition2) {
      for (i = 0; i < word.length; i++) {
         if (word[i] == match) {
            // if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i);
         } else {
            console.log('---No match found at', i);
         }
         }
   } else {
      console.log("Please pass correct arguments to the function!");
   }
   
}
// letterFinder("code", "now")
letterFinder("cap", "c")

function doubleIt(num) {
   return num * 2
}
function ObjectMarker(val) {
   return{
      prop: val
   }
}
ObjectMarker(20)
// functional programming-we use a lot of functions and variables.
let code = 5.8
console.log(code);

var coder;
var ten = 10
console.log(coder);
coder = 8
ten = coder 
// console.log(ten);
console.log(coder);
var a = 10
var b = 2
a = a + 20
b = b - 1
console.log(a);
console.log(b);
// incrementing numbers 
var myVar = 87
myVar ++
console.log(myVar);
/*instead of reassigning a variable for addition like this : var a = 10, a = a + 10. You can use this 
shortcut------------ a += 10 (using the plus equals operator). You can also do the same with subtraction,
division and multiplication.
there is something called "escape strings" or "escape literal quotes"  it is an escape character
in JavaScript. put a backslash before each of the quotations in a string. Another way is using single quotes.
 The third way is b using Backticks.ESCAPE SEQUENCES IN STRINGS:
 \': single quote, \" : double quote, \\: Backslash, \n : newline, \r : carriage return, \t : tab
 \b : backspace, \f : form feed. */
var myStr = "I am a \"double quoted\" string inside \"double quotes"
console.log(myStr);
var myStr = 'I am a "double quoted" string inside "double quotes"'
console.log(myStr);
var myStr = `i am a "double quoted" string inside "double quotes"`
console.log(myStr);

var myStr = "Firstline\n\t\\SecondLine\nThirdLine"
console.log(myStr);
var ourStr = "this comes first, "
ourStr += "that comes second"
console.log(ourStr);

var theName = "coder"
var myStr = "Hello, the name is " + theName + ", is this code good now ?"
console.log(myStr);
// appending variables to string:
var lit = " awesome!"
var join = "JavaScript is"
join += lit 
console.log(join);
// checking for the length of strings:
// var firstNamelength = 0
var firstName = "encoder"
console.log(firstName.length);
console.log(firstName [firstName.length - 2]); /* to get the last letter in this string*/

// Bracket notation to find First Character in string:
var firstName = "encoder"
console.log(firstName[4]);

// string immutaility: that is, to make corrections- read more on this.
// word blanks:

function illustrate(myCode, myJava, myScript) {
   var result = ""
   result += "let" + " JavaScript" + " " + myCode + " " + myJava + " particular" + " " + myScript 
   return result
}
console.log(illustrate("run", "this", "code"));
console.log(illustrate("execute", "my", "code"));

/* store multiple values with arrays: Arrays allow you to store several pieces of data in one place. 
You can store different data types in an Array. we have "nested arrays or multi-dimensional array
e.g: [['array',20], ['another', 80]] */

var firstArray = [50, "so", "tell", 80, true]
console.log(firstArray[2]);
// modifying arrays with indexes, using bracket notation:
var firstArray = [50, "so", "tell", 80, true]
// firstArray [2] = "set"
firstArray.push('yes')

console.log(firstArray);
// access multi dimensional arrays with indexes:
/* Manipulate arrays with push, pop, shift, unshift: shift:The shift function removes the first element of the 
array.instead of the last element. ourArray.shift....... The unshift function is similar to the Push array
function, while push adds an element to the end of the Array, the Unshift function adds an element to the beg
inning.
//  shopping list [["wears", 2], ["shoes", 5], ["stationeries", 8]]
// Write Reusable codes with Functions.
/* Passing Values to Functions with Arguments: Parameters are variables that act as Placeholders for the Values 
that are to be input to a Function when it is called. Everything inside the curly brackets is run anytime the
function is called or invoked. Parenthesis is very important in functions.*/

function ourReusableFunction() {
   console.log("Take Note!");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function ourFunctionWithArgs(a, b) {
   console.log(a - b);
}
ourFunctionWithArgs(18, 9)


function firstFunc(a, b) {
   console.log(a + b);
}
firstFunc ("she", " codes")
/* Global Scope and Functions: Scope refers to the visibility of Variables. Variables which are defined outside
of a Function Block have Global Scope. Global scope means they can be seen everywhere in your JavaScript code.
 it is possible to set a variable without using the "var" keyword*/
var myGlobal = 10

function func1() {

   oopsGlobal = 5 /*if we add a var keyword in this code, we wont be able to see it anywhere, because it will 
   be scoped to this function. therefore, this variable becomes global automatically. */
}

function func2() {
   var output = ""
   if (typeof myGlobal != "undefined"){
      output += "myGlobal: " + myGlobal
   } 
   if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal
   }
   console.log(output);
}
func1()
func2()
/* Local scope and functions: Variables which are declared within a fuction as well as a function parameters
  have local scope. That means they are only visible from within the Function.*/

  function myLocalScope() {
   var myVar = 5
   console.log(myVar);
  }
  myLocalScope()
  /* Global vs Local scope in functions- It is possible to have both Global and Local variables with the same
  name, when you do this, the Local Variable takes precedence over the Global Variable.*/
  var outerWear = "Tees"

  function myOutfit() {
   var outerWear = "sweater"
   return outerWear
  }
  console.log(myOutfit());
  console.log(outerWear); /*this is the global variable. */

/*  Return a value from a Function with Return : you can return a value from a function with a return statement
 */
function minusSeven(num) {
   return num - 7
}
console.log(minusSeven(10));

function timesfive(num) {
   return num * 5
}
console.log(timesfive(5));
/* understanding undefined value returned from a function: Functions can have return statements, but they 
dont have to.*/
var sum = 0
function addThree() {
   sum = sum + 3
} /*  Functions can have return statements, but they dont have to.if you dont specify return value, the return 
value is just undefined.*/
// Assignment with returned value: it is simple to assign a return value to a variable;
var changed = 0;

function change(num) {
   return (num + 5) / 3;
}
changed = change(10);

var processed = 0;
function processArg(num) {
   return (num + 3) / 5;
}
processed = processArg(7)
/* STAND IN LINE: In Computer science, a queue is an Abstract Data structure where items are kept in order
New Items can be added to the back of the queue, and old items are taken off from the front of the queue.*/

// function nextInLine(arr, item) {
//    arr.push(item)
//    return arr.shift() /*Shift removes the first item, and returns the first item. */ 

// }
//  var testArr = [6.2,5.3,3.6,4.6,5]
//  console.log("Before: " + JSON.stringify(testArr));
//  console.log(nextInLine(testArr, 6));
//  console.log("After: " + JSON.stringify(testArr));

 function nextInLine(arr, item) {
   arr.push(item)
   return arr.shift()
 }
 var testArr = [2,4,6,8,5]
 console.log("before: " +JSON.stringify(testArr));
 console.log(nextInLine(testArr,3));
 console.log("After: " + JSON.stringify(testArr));

 /* json. stringify is just a way to change an array into a string that can easily be printed out to the screen
//  Use conditional logic with if statements.

function trueOrFalse(wasThatTrue) {
   if (wasThatTrue) {
      return "Yes, that was true!";
   }
   return "No, that was false"
}
console.log(trueOrFalse(true));
/* comparison with the equality operator: there are many Comparison operators in JavaScript, that will return
a Boolean of true or false. The most common is the Equality Operator and it is often used in an IF statement.
*/

function testEqual(val) {
   if (val == 12) { /* a single equality means you are assigning a variable, which in this case is "val" */
      return "Equal";  
   }
   return "Not Equal";
}
console.log(testEqual(10));
// comparison with the strict equality operator
// Practice comparing different values

function compareEquality(a, b) {
   if (a == b) {
      return "Equal"
   }
   return "Not Equal"
}
console.log(compareEquality(10, "10"));
// comparison with the inequality operator.

function testNotequal(val) {
   if (val != 90) {  /* same thing goes for the strict inequality operator "!==" */
      return "Not equal";
   }
   return "Equal";
}
console.log(testNotequal(10));

function testGreaterThan(val) {
   if (val > 100) {
      return "Over 100"; /*you can replace this with greater than or equal to op(>=) this will output 2nd if */
   }
   if (val > 10) {
      return "Over 10";
   }
   return "10 or Under";
}
console.log(testGreaterThan(10));
// Comparisons with the Logical And operator
function testLogicalAnd(val) {
   if (val <= 50 && val >= 25) {
      // if (val >=25) { this is s a nested IF statement. ignore this code.
         return "Yes"
      // }
   }
   return "No"
}
console.log(testLogicalAnd(10));
// Comparisons with the logical OR operator.

function testLogicalOr(val) {
   if (val < 10 || val > 20) {
      return "Outside"
      
   }
   return "Inside"
}
console.log(testLogicalOr(15));
// Else Statement
function testElse(val) {
   var result = ""
   if (val > 5) {
      result = "Bigger than 5"
   } else {
      result = "5 or Smaller"
   }
   return result
}
console.log(testElse(4));
/** Else if statements- if you have multiple Conditions that needs to be addressed, you can use ElseIf 
 * statements. It is a way of chaining IF statements together.*/ 
function testElseIf(val) {
   if (val > 10) {
      return "Greater than 10"
   } else if (val < 5) {
      return "Smaller than 5"
   } else{
      return "Between 5 and 10"
   }
}
console.log(testElseIf(7)); /**You dont have to use a multiple IF statement. */
/**Logical order in IF ELSE statements- when you are using Else if statements, order is very important: */

function orderMyLogic(val) {
   if (val < 10) {
      return "Less than 10";
   } else if (val < 5) {
      return "Less than 5"
   } else{
      return "Greater than or equal to 10"
   }
}
console.log(orderMyLogic(7)); /**note, important! - order is very important in Else if statements
once the first condition is met, it doesnt even check for the other conditions. */
// Chaining IF ELSE statements.
// Golf code.
var names = ["Hole=in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
   if (strokes == 1) {
      return names[0]
   } else if (strokes <= par - 2) {
      return names[1]
   } else if (strokes == par - 1) {
      return names[2]
   } else if (strokes == par) {
      return names[3]
   } else if (strokes == par + 1) {
      return names[4]
   } else if (strokes == par + 2) {
      return names[5]
   } else if (strokes >= par + 3) {
      return names[6] 
   }
   return "Change Me"
}
console.log(golfScore (5, 4));
/** Switch Statements: Instead of using chained ELSE If statements, you can use Switch Statements. A switch
 *  statement 
 * tests a value and can have many case statements, which defines various possible values.*/

function caseInSwitch(val) {
   var answer = "";
   switch (val) {
      case 1:
         answer = "alpha"
         break; /** "break" means we are at the end of that case statement. */
      case 2: 
         answer = "beta"
         break;
       case 3:
          answer = "gamma"
          case 4:
          answer = "delta"

   
      default:
         break;
   }
   return answer;
}
console.log(caseInSwitch(1));
/* Default option in switch statements- the default option is kind of like ELSE in an IF ELSE statement.*/

function switchOfStuff(val) {
   var answer = "";
   switch (val) {
      case "a":
         answer = "bold";
         break;
        case "b": 
        answer = "light";
        break;
        case "c":
         answer = "bright";
         break;
   
      default:
         answer = "stuff";
         break;
      
   }
   return answer;
}
console.log(switchOfStuff("a"));
// multiple identical options in switch statements

function sequentialSizes(val) {
   var answer = "";
   switch (val){
      case 1:
      case 2:   
      case 3:
         answer = "Low";
         break; 

      case 4:
      case 5:   
      case 6:
         answer = "Mid";
         break; 
      case 7:
      case 8:   
      case 9:
         answer = "High";
         break; 
         
   }
  return answer;
}
console.log(sequentialSizes(1));
// var tobi = 2;
// var shola = 3;

// var conclusion = shola + tobi
// console.log(conclusion);

// function num(shola, dare) {
//    return shola + dare
// }

// console.log(num(10,10''));
var x = 3;
x++;
console.log(x);

// replacing if else chains with switch
function chainToSwitch(val) {
   var answer = ""
   switch (val) {
      case "Bob":
         answer = "Marley";
         break;
       case 42 :
         answer = "the Answer";
         break;
      case 1 :
         answer = "There is no #1";
         break;
      case 99 :
         answer = "Missed me by this much!";
         break;
      case 7 :
         answer = "Ate nine";
         break;
      default:
         break;
   }
   if (val === "Bob") {
      answer = "Marl";
   } else if (val === 42) {
      answer = "The answer";
   } else if (val === 1) {
      answer = "There is no #1";
   } else if (val === 99) {
      answer = "Missed me by this much!";
   }else if (val === 7) {
      answer = "Ate Nine";
   }
return answer;
}
// Returning Boolean Values From Functions.
function isLess(a, b) {
//    if (a < b) {
//       return true;
// } else {
//    return false;
// }
// we can skip the whole if statement logic and do it like this instead:
return (a < b)
}4
 console.log(isLess (10, 15)); ;
//  Returning Early pattern from Functions.

function abTest(a, b) {
   if (a < 0 || b < 0) {
      return undefined;
   }


   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
// Counting cards
var count = 0

function cc(card) {
   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count ++;
         break;
         
   }
   return "Change me"
}
() => {

}