// // string "name" A collection of characters enclosed in single quotes or double quotes.
// // boolean true, usually used by banks
// // integer or number 234
// arrays
// // float 45.90
// they are data types
// object
// Operators are used to control the flow of a program that meets certain Criteria.
// // EQUALITY OPERATORS <> == === (=== checks if both the data type and value is true, e.g 100==="100"
//   equals false, because of the data types. it's the strict equality operator ) (== checks if only the value
//  is true)
// // ASSIGNMENT OPERATORS = =+ =-
// inequality operators !=  e.g 1!=1 equals false. strict inequality operator is !== e.g 1 !== "1" equals true
// // ARITHMETIC OPERATORS / + // % - *n** e.g 10**2 (10 raise to the power of 2) will give us 100
// modulus division: that is, it checks how many times you can fit one number into the other and the
// remainder.e.g 9%8 equals 1, 16%8 equals 0
// use parenthesis to control the order of calculations. e.g 2+4+8 is different from 2(4+8)
// if parenthesis is not used, JavaScript will follow the standard mathematical nsequence of calculations.
// Comparison operators in JS are: >< == E.G 10==10(true) i.e 10 is equals to 10 
// Logical Operators are:
// and- && checks for both conditions to be true e.g a>5 && a<10
// or- || checks for at least one condition to be true. e.g a>5 || a>10
// not- ! returns false if the result is true. e.g !(a>5)
// CONDITIONAL STATEMENTS: IF AND ELSE E.G

// var place = 'first'
// if (place == 'first') {
//     console.log('Gold');
// }
// else if (place == 'second') {
//     console.log('silver');
// }
// else if (place == 'third') {
//     console.log('bronze');
// }
// else {
//     console.log('No medal');
// }

// if(light == "green") {
//     console.log("Drive")
// } else if (light == "orange") {
//     console.log("Get ready")
// } else if (light == "red") {
//     console.log("Dont' drive")
// } else {
//     console.log("The car is not green, orange, or red");
// }

// //

// switch(light) {
//     case 'green':
//         console.log("Drive");
//         break;
//     case 'orange':
//         console.log("Get ready");
//         break;
//     case 'red':
//         console.log("Don't drive");
//         break;
//     default:
//         console.log('The light is not green, orange, or red');
//         break;
//  }
// var junior = 5

for (var junior=0; junior<5; junior++){
    console.log(junior);
}
//  LOOPING CONTRUCTS- using '
// types of loops: FOR, WHILE, NESTED.
// We use loops to automate code repetitions.

/* instead of doing something like this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
...
console.log(100)
LOOPS will help o do this:
for (var i = 1; 1<101; i++){
    console.log(i);
}
FOR LOOP
Used to loop a block of codes a certain number of time.
it is a structured loop with a specific conditional structure
where a counter variable must be set:
var i=0;(set the value), i<3;(specify the condition)
i++;(increment the counter)

WHILE LOOP
IS ALSO SIMILAR TO THE FOR LOOP
code that repeats as long as a specified condition is true
IT WILL RUN AS LONG THE CONDITION RETURNS TRUE.
E.G var i=1
while (i < 4){
    console.log(i)
    i=1+1;
}

for loop example:
for (var i = 1; i <= 3; i++) {
    console.log(i)
}
console.log('Go')

example 2:
for (var i = 10; i >0; i--){
    console.log(1)
}
console.log('Happy New Year!')
 
while loop example: 
var counter = 3
while (counter > 0) {
    console.log(counter);
    counter = couter - 1;
}
console.log('Happy New Year!')
result:
3
2
1


// var result = 50
// if (result > 40) {
//     console.log("Congratulations you passed.");
// }
// else {
//     console.log("You didnt pass.");

// }


// var food = 'hot'
// if (food == 'hot') {
//     console.log('Too hot');
// }
// else if (food == 'cold') {
//     console.log('Too cold');
// }
// else {
//     console.log('Just right');
// }

/* NESTED LOOPS
for (i = 0; i < 2; i++){Outer loop}
for (j = 1;j<=7; j++){ inner loop
    console.log("week" + i "day" + j)
}


 
// console.log("Hello Everyone!!");
// document.write("Hello Everyone")
// arithmetic operators are:
/*multiply *
divide /
Exponents **
Modulo/Remainder % e.g- 5%2
Add +
Subtract -



// var general;
// console.log(general);
// general=6;
// console.log(typeof general)
// general="hey"
// console.log(typeof general)
// general=true
// console.log(typeof general)
// general
// console.log(typeof(general), 'gen')
// general=[2,4,6,8]
// console.log(typeof general);
// console.log(general.length);

// console.log(2+8);
// console.log("hi"  + "   there")
// var num1=5;
// var num2=num1+5;
// console.log(num2);
// var num3=num1+"8"
// console.log(num3);

// // var num1=prompt("Enter some value");
// console.log(typeof num1);
// // console.log(parseFloat num1+9);
// // concatenation
// // const name='John';
// // const age= '28';
// // Template string
// // console.log(`My name is $`);

// const r='somewhere';
// console.log(r.length)
// console.log(r.toUpperCase())
// console.log(r.substring(0,4))
// console.log(r.split(''))
//  Arrays- variables that hold multiple values.
// const fruits = ['apples', 'oranges', 'pears', 10, true]
// fruits[3]= 'grapes';
// fruits.push('mangos');
// fruits.unshift('strawberries')
// fruits.pop('mangos')
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);
// const person = {
//     firstName:'Temitope',
//     lastName:'Adeyosoye',
//     age:24,
//     hobbies:['music', 'movies', 'reading'],
//     address:{
//         street:'32, Adeshiyan street',
//         State: 'Lagos',
//         country: 'Nigeria'
//     }

// }
// person.gmail='temitope@gmail.com'
// console.log(person.address.State);




// // var name = "temitope"
// // var amount = 56 - 20
// // var age = 45
// // var isFemale = true

// // var test;

// // var name = "temmy"

// // function test(){
// //     var name = "Mr. "
// //     var name  = name + "junior"
// // }


// // var obj = {}


// // function test(bodyCream, name, age, salary, tax){
// //     var jay = 'junior';
// //     console.log(`My name is ${jay}`);
// //     console.log(`And I use ${bodyCream} on my body`);
// //     console.log(`And I am ${age} years old`);
// //     console.log(`My gross salary is ${salary}`);
// //     console.log(`my tax is ${tax}`);
// //     console.log(`So my net income is ${salary - tax} monthly`);
// // }
 

// // console.log(jay);

// // test(1, "Temitope", 21, 200, 10)

// var obj = [
//     {id:1, name:"ADEYOSOYE", age: 35}, 
//     {id:2, name:"ADE", age: [30, 32, 44, 79]}
// ] 

// // var separators = 10_200_000
// // var bool = true
// let error = "come over here\" says T Pompin";
// // let mesage = "$###YDHDHDHDHDHDHDHDHDH=]\n/]\\\\\h'h;h;j;j. She said";
// // let cast = typeof(String(6464646));

// // console.log(error,",",  cast);

// let result = 'a' < 'Z';

// // console.log(result.capital); // false

// // const person = {name: "oolllkkk"}
// // person.age = 25;

// // console.log(person);

// var person = {
//     'firstName': 'John',
//     'lastName': 'Doe'
// };

// // delete person.firstName;

// // person.firstName = 'Jane';
// // const a = 'ghjhgh'
// // delete a

// // console.log(person, a)

// // let employee = {
// //     firstName: 'Peter',
// //     lastName: 'Doe',
// //     employeeId: 1
// // };

// // console.log('ssn' in employee);
// // console.log('employeeId' in employee);

// // console.log(person);

// // let person = [{
// //     firstName: 'John',
// //     lastName: 'Doe'
// // },{
// //     firstName: 'Mary',
// //     lastName: 'Jane'
// // }
// // ];
// operators
// food = prompt('how much was the food?')
// tipPercentage = prompt('tip %?') / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount
// console.log(total);

// console.log(tipAmount);
// alert(tipAmount)
// prompt
// fruit = prompt('what is your favorite fruit?')
// console.log(fruit);

// // console.log(person[0]['firstName']);
// // console.log(person[1].firstName);

// // let str = "Hello";
// // console.log(str[str.length -5]); // "o"
// // alert(bool)
//  // This is my first Javascript code 
// //  console.log(obj[1].age.length)


// var counter = 1;
// var showCounter = () => console.log(counter);

// console.log(window.counter);
// window.showCounter();

// const width = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;


// const height = window.innerHeight
// || document.documentElement.clientHeight
// document.body.clientHeight;  
// const height= document.body.clientHeight;    
// let features = 'height=600,width=800';
// let windowName = 'test'
// console.log(height);

// let newWindow = window.open("https://facebook.com", 'test', features);
// setTimeout(() => {
//     window.open('https://instagram.com', 'test')
// }, 3000);
// let result = confirm('Are you sure you want to delete?');
// console.log(result)

// let message = result ? 'You clicked the OK button' :
//     'You clicked the Cancel button';

// alert(message);
// window.open("https://instagram.com", windowName)