
class User{
    constructor(username){
    
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User {

    constructor(username,email, password){
         super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Ram","ram@google.com" ,"123")

console.log(chai);

chai.addCourse()

const coffee = new User("Hariom")

console.log(coffee);

coffee.logMe()
