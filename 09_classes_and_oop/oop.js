const user = {
    username: "sandeep",
    loginCount: 8,
    signedin: true,
    getUserDetails: function(){
        console.log("username:", this.username);
        console.log(this);
    }
}

user.getUserDetails()

console.log(user.username)

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user("sandeep", 12, true)
const userTwo = new user("hitesh", 11, false)
console.log(userOne);

