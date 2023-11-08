// A. TASK 1:VARIABLES and OPERATORS
//  1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let language = 'Javascript' //string
let score = 10 //number


// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.

let length = 10
let width = 5

let area = length * width

console.log(area)
console.log(`The area of the rectangle is 50`)

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.

let num1 = 10
let num2 = 4
let remainder = 10%4
console.log('The remainder is',remainder)


// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks

let x = num1 / num2
// console.log(x)
console.log(`num1/num2 = ${x} remainder ${remainder}`)
// <------------------------------------------------------------------------------------------------------------------------>


// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]

// Integers
let integer = 15
// Decimals
let decimal = 9.87
// String
let string = "My name is Jason"
// Array
let fruit = ["apple", "strawberry", "kiwi"];

// Object
let person = {
    name: 'Jason',
    age: 25,
    hobbie: 'gaming'
}
// 2. Once you’ve created the variables, display them to the console
console.log(integer)
console.log(decimal)
console.log(string)
console.log(fruit)
console.log(person)
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof integer)
console.log(typeof decimal)
console.log(typeof'Jason')
console.log(typeof fruit)
console.log(typeof person)

// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array
const arrayNum = [25 , 'Jason' , 98 , 'September']; //object
console.log(typeof arrayNum)
// 5. Create a null variable and an undefined variable
let jay = null
let js = 
console.log(jay)
console.log(js)
// <----------------------------------------------------------------------------------------------------------------------------------------------------------------------->
// ***********C. Task 3. functions and conditional statements************
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!

function dollars() {
    let dollar = 1000/18.41;
    console.log(`$ ${dollar.toFixed(2)}`);
}
dollars()

function euros() {
    let euro =  1000/19.7;
    console.log(`€ ${euro.toFixed(2)}`);
}
euros()

function pounds() {
    let pound = 1000/22.63;
    console.log(`£ ${pound.toFixed(2)}`);
}
pounds()


//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
function myFunction() {
    let inputAmount = 400 
       let tax = 400 * 15/100
       let end = inputAmount + tax
       console.log(end)

       
}
myFunction()

//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
    firstNum = 8
    secondNum = 20
    thirdNum = 14

    function comparison() {
        if(firstNum>secondNum) {
            console.log(firstNum +' is larger')
        }
        else {
            console.log(secondNum + ' is larger')
        }
    }
    comparison()
//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
     function modulus() {
        if ((firstNum % 2) == 0){
            console.log('firstNum is even')
          } else {
            console.log('firstNum is odd')
          }
     }
     modulus()
       
    
    
//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.
if (firstNum>secondNum && firstNum>thirdNum){
    if (secondNum > thirdNum) {
        console.log (firstNum , secondNum , thirdNum);
    }
    else {
        console.log (firstNum , thirdNum , secondNum );
    }
}
if (secondNum>firstNum && secondNum>thirdNum){
        if (firstNum > thirdNum) {
            console.log (secondNum , firstNum , thirdNum);
        }
        else {
            console.log ( secondNum , thirdNum , firstNum);
        }
    }
if (thirdNum>firstNum && thirdNum > secondNum){
            if (firstNum> secondNum) {
                console.log (thirdNum , firstNum , secondNum);
            }
            else {
                console.log (thirdNum , secondNum , firstNum);
            }
}