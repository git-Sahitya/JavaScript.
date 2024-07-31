

// Using (static) to not allow to everyone who access the value just use static before it.

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `23343`
    }
}

const myUserName = new User("Sahitya")
console.log(myUserName);


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    
}
const myteacher = new Teacher("Harshal", "Harshal@microsoft.com")

console.log(myteacher);

console.log(myteacher.createId());