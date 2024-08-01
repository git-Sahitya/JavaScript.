class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return`${this._email.toUpperCase()}`
    }
    set email(value){
         this._email = value
    }


    get password(){
        return `${this._password.toUpperCase()}Harshal`
    }
    set password(values){
        this._password = values
    }
}

const getter_setter = new User("Sahitya@google.com" , "abc")
console.log(getter_setter.password);
console.log(getter_setter.email);