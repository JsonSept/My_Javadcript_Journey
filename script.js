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
console.log(remainder)


// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks

let x = num1 / num2
console.log(x)
console.log("num1/num2 = `8` remainder `2`")
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