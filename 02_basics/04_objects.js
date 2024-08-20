const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Navdeep";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "navdeep",
            lastname: "raushan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2};
// console.log(obj3);

// const obj4 = Object.assign({},obj1, obj2);

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}


const {courseinstructor: instructor} = course;

console.log(instructor);

// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }


