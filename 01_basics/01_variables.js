const accountId = 2233
let accountEmail = 'user@gmail.com'
var accountPassword = '12345'
address = 'Latur'


accountEmail = 'user2@gmail.com'
accountPassword = '54321'
address = 'sindhgaon'
let accountState ; 
/* dont use var because of issue in block scope and function scope*/ 
// const value ;  SyntaxError: Missing initializer in const declaration


// accountId = 3344  occurs error: TypeError: Assignment to constant variable. NOT ALLOWED
console.table([accountId,accountEmail,accountPassword,address,accountState])

