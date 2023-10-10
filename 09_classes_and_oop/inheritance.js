class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `USERNAME is ${this.username}`
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `A new course was added by ${this.username}`
    }
}

const chai = new teacher("chai", "chai@gmail.com", "789")

console.log(chai.addCourse());
console.log(chai.logMe());

const masalaChai = new user("sandeep")
console.log(masalaChai.logMe());

console.log(chai instanceof user);