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
