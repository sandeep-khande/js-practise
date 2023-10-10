class user{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sandeep`
    }

    set password(value){
        this._password = value
    }
}

const sandeep = new user("s@khande.com", "san")
console.log(sandeep.email);