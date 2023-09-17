const user = {
    username: "sandeep",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
    }
}

// user.welcomeMessage()
// user.username = "sai"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     username: "sandeep"
//     console.log(this.username);
// }

// const chai = function (){
//     username: "sandeep"
//     console.log(this.username);
// }

const chai =  () => {
    username: "sandeep"
    console.log(this.username);
}

// chai()





