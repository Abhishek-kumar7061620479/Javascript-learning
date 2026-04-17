const accountId = 124345
let accountName = "Abhishek"
var accountEmail = "abc@gmail.com"
let accountPassword = "********"
let accountCity = "Mohali"
let accountState 


//accountId = 345335  // we cannot change the value of accountId as it is declared with const



// we will always use let for decaring variables and const for declaring constants. 
// We should avoid using var as it is function scoped and can lead to unexpected behavior due to hoisting.


accountName = "Abhi"
accountEmail = "def@hotmail.com"
accountCity =  "Hydrabad"

console.log(accountName) // use for print single variable/constants



// we can also print multiple variables/constants using comma separated values in console.log
console.table([accountId , accountName , accountEmail, accountPassword, accountCity , accountState]) // use for print multiple variables/constants in tabular format