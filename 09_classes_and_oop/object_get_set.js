const user = {
    _email: "s@khande.com",
    _password: "abs",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);