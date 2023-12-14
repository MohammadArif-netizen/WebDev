const accountId = 144553
let accountEmail = "arif@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 12 // we can not change const value

accountEmail = "arif@email.com"
accountPassword = "54321"
accountCity = "Hyderabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 Prefer not use "var". 
 Because of issue of block scope and functional scope
*/
