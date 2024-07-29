
 // 1st promise method

const promiseOne = new  Promise( function(resolve , reject){

    setTimeout( function (){
     //   console.log("Jai shree Ram");
        resolve()
    }, 1000)
})   

promiseOne.then( function (){
   // console.log("promise consumed");
})

// 2nd promise method  ========

new Promise( function (resolve,reject){
    setTimeout(  function(){
       // console.log("Async task two");
        resolve()
    }, 1000)

}).then( function(){
 //   console.log("Async two resolved");

})
 

// 3rd promise method =====

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
       resolve({ userName : "Sahitya" , email : "Sahitya@google.com"})
    },1000)
 })

 promiseThree.then(function(user){
 //  console.log(user);

 })

 // 4th promise Method ===

 const promiseFour = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = false
        if (!error) {
            resolve({ username : "Harshal" , id_num :"649954"})
        } else {
            reject("Error Somthing Wrong")
        }
    },1000)
 })

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((myusername)=>{
  console.log(myusername);
})
.catch(function(err){
    console.log(err)
})
.finally(function(){
    console.log("work done");
})

// 5th  promise/async and await function  method ======


const promiseFive = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true
        if (!error) {
            resolve({ username : "javaScript" , id_num :"649954"})
        } else {
            reject("Error: javaScript went  Wrong")
        }
},1000)

})

async function consumepromiseFive (){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumepromiseFive() 

// 6th  method ========

 async function getAllUsers(){
 
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
         const convertJson =  await response.json()
         console.log(convertJson);

    }catch (error){
        console.log(error);
    }
 }
 getAllUsers() 

 // 7th metrhod  same url

 fetch('https://jsonplaceholder.typicode.com/users')

 .then((item) => {
     return item.json()
 })
 .then((Data) => {
    console.log(Data);
 })
 .catch( (error) => console.log(error))