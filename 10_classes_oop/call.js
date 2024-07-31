 
 function  setUserName (username){
    this.username = username
    console.log("Called");
 }

 function createUser(username,email,password){

        setUserName.call(this,username)
    this.email = email
    this.password = password
 }

 const chai = new createUser("Sahitya Singh" , "sahitya@google.com" , "5426272")

 console.log(chai);