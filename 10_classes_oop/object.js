function multipleBy5 (num){
 
     return num*5
}

// multipleBy5.power = 2

console.log(multipleBy5(8));
console.log(multipleBy5.powew);
console.log(multipleBy5.prototype);

function createUser(username , score){
     this.username = username
     this.score = score
}


createUser.prototype.increment = function(){
     this.score++
}

 createUser.prototype.printMe = function(){
     console.log(`Price is ${this.score}`);
 }

 const chai =  new createUser("chai" , 25)
 const coffee =  new createUser("coffee" , 250)

 coffee.printMe()