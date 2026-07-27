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


// ===================== OPERATIONS ==========================

// let value = 3
// let negativeVal = -value
// console.log(negativeVal);
// console.log(typeof negativeVal)
// operators 

/*what are operators and what are the types of operators in js ?
    "Operators in JavaScript are special symbols or keywords used to perform operations
     on one or more operands, such as values or variables, and produce a result. 
     JavaScript provides several types of operators, including Arithmetic,
     Assignment, Comparison, Logical, Bitwise, String, Ternary, and Type operators.
     These operators are used for tasks such as performing calculations, assigning values, comparing data, 
     combining conditions, manipulating bits, concatenating strings, making conditional decisions, and checking data types."*/


// console.log(2 + 1)
// console.log(2 - 1)
// console.log(2 * 1)
// console.log(2 ** 3)
// console.log(2 / 4)
// console.log(2 % 4)

// string concatination
// let name = 'sandy'
// let sirname = ' sundi'
// let combine = name + sirname
// console.log(combine)
// console.log('1'+2)
// console.log(1+'2')
// console.log(1+3+'3')
// console.log(1+'2'+2)
// console.log(1+3+'3')
// console.log(1+3+4+3+3+'3'+3+4)
// console.log(+true)   // value == 1
// console.log(+'')
// console.log(true+) //SyntaxError: Unexpected token
// prefix
// INCREMENT TYPES
// PRE INCREMENT
// let value = 4
// let val2 = ++value
// console.log(val2)
// console.log(value)

// POST INCREMENT
// let value = 4
// let val2 = value++  // 4  
// console.log(val2)
// console.log(value)  // 5

// console.log(undefined <= 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined > 0)


// const bigNumber = 83875484584857257757n
// console.log(typeof bigNumber)


// const newFunction = function(){
//     return 'hiii javascript'
// }

// console.log(newFunction())


const newObject = {
    name:'ganesh',
    age: 33,
    subjects: ['marathi','english','math'],
    isvalid : true,
    isactive: null,
    passed:undefined,
    info : {name:'ram',sirname:'kumar'}

}
console.log(newObject)
console.log(typeof newObject)
console.log(typeof newObject['info'])


























