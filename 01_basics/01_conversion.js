/*what is typeconversion and what are the types?
"Type conversion is the process of converting a value from one data type to another in JavaScript.
It can happen automatically by JavaScript or be done manually by the developer. 
There are two types of type conversion: implicit type conversion, also known as type coercion, and explicit type conversion. 
Implicit type conversion occurs automatically when JavaScript converts one data type to another during operations or comparisons.
Explicit type conversion is performed manually using built-in functions such as Number(), String(), and Boolean()."*/

// let value = '32'
// console.log(typeof value);    // string
// let integer = Number(value)  
// console.log(typeof integer);  // number
// console.log(integer);          // 32

// let value = '33abc'
// let integer = Number(value)
// console.log(integer)            // NaN
// console.log(typeof integer);  //number

// let value = 'ganesh'
// let integer = Number(value)
// console.log(integer)           //value = NaN
// console.log(typeof integer);  // number


// let value = null 
// let integer = Number(value)
// console.log(integer)   //value == 0  
// console.log(typeof integer)  // number


// let value = undefined 
// let integer = Number(value)
// console.log(typeof integer); //number
// console.log(integer)           // NaN

// let value = true
// let integer = Number(value)
// console.log(typeof integer);  //number 
// console.log(integer)          // 1

// boolean conversion
// let userLoggedIn = 0
// let booleanResult = Boolean(userLoggedIn)
// console.log(booleanResult);
// console.log(typeof booleanResult) 
 
// reuslt = 1 , 2 ==> true  | 0 ==> false | 'string' ==> true |
//  ' ' ==> false | [] ==> true | {} ==> true

// // string conversion
// let value = 33
// let someString = String(value)
// console.log(typeof someString);
// console.log(someString)

















