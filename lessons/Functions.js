// Declarative function
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// Anonymous function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with arguments
function printName(name){
    console.log(name)
}
printName("Andy")

// Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// Import function
import { printAge } from '../Helpers/PrintHelper.js'
printAge(5)

// Import everything
import * as helper from '../Helpers/PrintHelper.js'
helper.printAge(10)