

class User{
     constructor(username, email, password){

    this.username = username
    this.email = email
    this.password =password
   }
    encryptPassword(){
        return `${this.password}abc`
    }
     capitalUserName(){
        return `${this.username.toUpperCase()}`
     }
}

const chai = new User("chai","chai@gmail.com","7457489")

console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.capitalUserName());

// Behind the scene before classes exist how to work this type of code.

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password =password

// }

//   User.prototype.encryptPassword =  function(){
//     return `${this.password}abc`
//   }

//   User.prototype.capitalUserName =  function(){
//     return `${this.username.toUpperCase()}abc`
//   }

// const Coffee = new User("Coffee", "coffee@microsoft.com","43434343434")

// console.log(Coffee.encryptPassword());
// console.log(Coffee.capitalUserName());

