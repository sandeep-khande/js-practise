function multiplBy5(num){
    return num*5
}

multiplBy5.power = 2
console.log(multiplBy5(5));
console.log(multiplBy5.power);
console.log(multiplBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
   
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}



const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

myHeros = ["superman", "thor"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling"
}

Object.prototype.sandeep = function(){
    console.log(`sandeep is present in all the objects`);
}

heroPower.sandeep()
myHeros.sandeep()

Array.prototype.heySandeep = function(){
    console.log(`sandeep says hello`);
}

myHeros.heySandeep()
heroPower.heySandeep()

// inheritance

let anotherUserName = "chaiAAurCode    "

String.prototype.trueLength = function(){
    console.log(`true length of ${this} is ${this.trim().length}`);
}

anotherUserName.trueLength()
"Sandeep".trueLength()