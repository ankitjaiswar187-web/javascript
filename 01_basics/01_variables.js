const accountId = 144553
let accountEmail = "ankitjaiswar@gmail.com"
var accountPassword = "182007"
accountcity = "Mumbai"
let accountState;

// accountId = 8 --> const keyword ko change nhi kiya ja sakta hai. // becouse it is not allowed.

accountEmail = "ac@ac.com" 
accountPassword = "111222"
accountcity = "Delhi"

console.log(accountId);

/*
Prefer not to use var

because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])