// singleton
// objects.create - constructor

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "sandeep",
    fullName: "sandeep khande",
    [mySym]: "mykey",
    age: 25,
    location: "Hyderabad",
    email: "sandeep@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// two ways to access the elements inside the objecct

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.age = 26
// console.log(JsUser["age"]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());