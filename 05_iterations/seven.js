
const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.map( (num) => num + 10)

console.log(newNum);

//:--- Chaining Method

const myNumbers = [ 1,2,3,4,5,6,7,8,9,10]

 const NUM = myNumbers.map( (num) => num + 10)
                    .map( (num) =>  num + 2)
                    .filter( (num)=> num >=15)
                    

 console.log(NUM);


 // NOTE :-- the major diff b/t map() and filte () is 
 // In map we can perform several operations such as ( * , / ,+ ,- etc) but
 // In filter method we can perform method such as ( < , > , <= ,>= etc.)