const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
})


const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
    resolve({username: "chai", email: "chai@example.com"})
   }, 1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "sandeep", password: "123"})
        } else reject("ERROR: something went wrong")
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "sandeep", password: "123"})
        } else reject("ERROR: JS went wrong")
}, 1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})