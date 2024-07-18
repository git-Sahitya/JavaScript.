


const mySum = Symbol("Jai shree Ram")





const JsUser = {

    name : "Sahitya",
    age : 23,
    email : "Sahitya@google.com",
    address : "Varanasi",
    "course" : "Btech",
    [mySum]  : "Jai Shree Ram",
     isLoggedIn : false
}

 
//  console.log(["age"]);
// console.log(JsUser["course"]); 
// console.log( JsUser);
// console.log(typeof[mySum]);



// JsUser.address = "Banaras";

// Object.freeze(JsUser)
JsUser.address = "prayagraj"
//console.log(JsUser);

 JsUser.greeting  = function(){
 
    console.log("Hello Js user");
}

 JsUser.greetingTwo  = function(){
 
    console.log(`Hello js user ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());