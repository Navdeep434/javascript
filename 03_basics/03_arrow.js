const user = {
    username : "Navdeep",
    price : 99,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Hitesh";
// user.welcomeMessage()

// console.log(this);


function chai() {
    let username = "Navdeep";
    console.log(this.username);
}

// chai();


const chai = () => {
     
} 