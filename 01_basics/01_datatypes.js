'use strict'; // treats all js code as newer version
// alert(4+4)  : we are using nodeJs not browser.
// there are two types of datatypes present in js
// PRIMITVE DATATYPES:
//numbers , strings , boolean , null , undefined
let age = 34;
let name = 'ganesh';
let isLoggedin = true; 
let passed = null;
let salary = undefined;
// console.table([typeof age, typeof name , typeof isLoggedin , typeof passed , typeof salary])

// NON PRIMITIVE :
// object , array , functions
let colors = ['red','green','yellow','white']
let info = {name:'ganesh',age:34}
function greet(name){
    return 'hello'+name +'good morning!!'
}

console.log(typeof colors)
console.log(typeof info)
console.log(typeof greet)



 