
// reduce method

const myNum = [1,2,3]

const myTotal = myNum.reduce( function (acc ,currval){
 
    console.log(`acc ${acc} and currval ${currval}`);

    return acc + currval
},0)



//=++++++++++++++++


console.log(myTotal);

const score = [ 10,20,30]

const TOTAL = score.reduce( ( initalValue , currentValue) =>{

 console.log(`initalValue is ${initalValue} and cubbentValue is ${currentValue}`);

 return  initalValue + currentValue
},0)

console.log(TOTAL);


//+++++++++++++

 const course = [
    {
        itemName : " javaScript",
        price : 2999
    },
    {
        itemName : " python",
        price : 999
    },
    {
        itemName : " Mobile dev",
        price : 8999
    },
    {
        itemName : "Data Science",
        price : 12999
    },
 ]

 const Total = course.reduce((accumulator,item) => accumulator + item.price 
 ,0) 

 console.log(Total);