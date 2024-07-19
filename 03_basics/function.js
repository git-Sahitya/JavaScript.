  
//   Type--1++++++++++++

function addTwoNumbers (num1,num2){

    console.log(num1+num2);
}

 addTwoNumbers(2,7);

//  Type--2+++++++++++++

 function sumTwoNum (num1,num2){

    let result = num1 + num2
    return result
 }
 let result = sumTwoNum(5,6)

 console.log("Result" , result);

// Type--3+++++++++++

 function sumTwoNum1 (num1,num2){

    return  num1 + num2   
 }

 let result1 = sumTwoNum1(2,8)
 console.log("Result" , result1);

// Type--4++++++++++

 function justLoggedIn (userName){
  
    return `${userName} just logged in`
 }

 console.log(justLoggedIn("Sahitya Singh"));


// Type--5++++++++++

function just_logged_in (user_name = "JOJO"){

    if(user_name === undefined){
     console.log("Please enter user Name");
     return
    }
    return`${user_name} just logged in`
}

console.log(just_logged_in("Sahitya"));

// Type--6  Rest_Operator

function calculataCartPrice (...num1){
    return num1
}

console.log(calculataCartPrice(200,400,500,1000));

// Type--7 Object in Function

const user1 = {
    name : "Sahitya",
    age : 23,
    email : "Sahitya@google.com"
}

function handleObject (anyObject){

     console.log(`User name is ${anyObject.name} and age is ${anyObject.age} and there email id is ${anyObject.email}`);
}

//handleObject(user1);

handleObject({
    name : "JOJO",
    age : "1.5 year",
    email : "jojolal@doggo.com"
})
// Type--8  function for array

const myNewArray = [200,400,600,800,1000]

function returnSecondValue (...getArray){
    return  getArray[0]
}

console.log(returnSecondValue(myNewArray));