const accountId = 1;
let accountEmail = "r.navdeepraushan@gmail.com";
var accountPassword = "12345";
accountCity = "Bangalore";
let accountState;

/* 
Prefer Not ot user var
Because of issue in block scope and functional scope.
*/

// accountId = 2; //Not Allowed as "accoutId is const".
accountEmail = "n.navdeepraushan98@gmail.com";
accountPassword = "67890";
accountCity = "Patna";

console.log(accountId);console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);