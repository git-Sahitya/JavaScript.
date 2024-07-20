
const userEmail = "Sahitya847@microsoft.com"

if(userEmail){
    console.log(`Got user Email address.`);
}



const userPhoneNumber = []

if(userPhoneNumber.length === 0){                                     // But this is not a phonew number .
    console.log(`Got user Phone Number...`);
}


// Falsy value :------

//        (  False, 0 -0 , BigInt 0n , "" , null undefined , NaN)
 
// rest of truthy valuse)(Thoose are surprised U ) such as

//  "0" , 'false' , " " , [] , {} , function(){}



const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ 

    console.log(`Object is Empty`);
}


//Nullish coalescing Operator(??) : null undefined

let Val ;

val = 5 ?? 10

console.log(val);



let val1 = null ?? 10

console.log(val1);



let val2 = undefined ?? 15 

console.log(val2);



let val3 = null ?? 20 ?? 25 

console.log(val3);



let val4 = undefined ?? null ?? 30

console.log(val4);


// Terniary Operator :-- not same as nullish operator

const iceTeaPrice = 200

iceTeaPrice <= 150 ? console.log("Less than 150") : console.log("More than 150");

 