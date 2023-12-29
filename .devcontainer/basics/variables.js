

const accountId=144553;
//accountId=2; not allowed
console.log(accountId);

let accountEmail="shiva@gmail.com"
accountEmail="mattoo@gmail.com"

console.log(accountEmail);

var accountPassword="12345"
accountPassword="1223342323"
console.log(accountPassword)
accountCity="Jaipur"
accountCity="bangalore"
/*
Please don't use var as it has multiple issues with functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity])
