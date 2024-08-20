// function sayMyName() {
//     console.log("N");
//     console.log("A");
//     console.log("v");
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("P");
// }

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3, 4);

// console.log("Result: ". result);

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);


// function loginUserMsg(username = "Nav") {
//     if (!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }



// console.log(loginUserMsg("Navdeep"));
// console.log(loginUserMsg());



function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "Navdeep",
    age: 26
}

// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
// }

// handleObject(user);

// handleObject({
//     username: "Navdeep",
//     age: 27
// });



const myNewArray = [200, 400, 600];

function returnSecondValue(myArr) {
    return myArr[2];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 700, 900]));