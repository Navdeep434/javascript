//obejct literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Navdeep",
    "full name": "Navdeep Raushan",
    [mySym]: "myKey1",
    age: 26,
    location: "Patna",
    email: "r.navdeepraushan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturdays"]
}

// console.log((jsUser.email));
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "n.navdeepraushan98@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "navdeep@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
