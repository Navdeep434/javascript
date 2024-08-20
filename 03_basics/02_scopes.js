// var c = 300;
// let a = 300;
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30; 
//     console.log("Inner; ", a);

// }


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "navdeep";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

// if (true) {
//     const username = "Nvadeep";
//     if (username == "Nvadeep") {
//         const website = "Youtube";
//         console.log(username + website);
        
//     }
    // console.log(website);
    
// }
// console.log(username);


// addOne(5);
function addOne(num) {
    console.log(num+1);
    
    return num+1;
}

const addTwo = function(num) {
    console.log(num+2);
    
    return num+2;
}
// addTwo(5);