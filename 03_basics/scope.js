

function one (){
    const userName = "Sahitya"

    function two(){
        const webSite = "Youtube"
        console.log(userName);          // NOte :-In nested function Child Function can access the parent function
    }
   // console.log(webSite);
     
    two()
}
   
one()

//  Nested example in if else conditin.

 if(true){
    const userName = "SAHITYA"
    if(userName==="SAHITYA"){
        const webSite = "Youtube"
        console.log(userName + webSite);
    }
    // console.log(webSite);
 }
// console.log(userName);




console.log(addOne(6))

function addOne(num){
    return num + 1
}



console.log(addTwo(3))                 //  error found

const addTwo = function(num){
    return num + 3
}
