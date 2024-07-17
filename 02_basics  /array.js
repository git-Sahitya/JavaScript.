

// Array

const myAry = [1,2,3,4,5,6,7]

const myHero =["Superman","Batman","Saktiman" ,"Doga","Naagraj"]

const myAry1 = new Array(1,2,3,4,5)

 console.log(myAry[1]);

// Array Methods

  myAry.push(8)                     // Add the given element in last.
  myAry.pop()                  // Remove last element

console.log(myAry);



   let unsft =myAry.unshift("sher")
   let sft = myAry.shift()

 console.log(myAry);

 console.log(unsft);
 console.log(sft);

console.log(myAry.includes(8));
console.log(myAry.indexOf(7));


const newAry =myAry.join()
console.log(newAry);

// slice

console.log("A", myAry);
const myn1 =myAry.slice(1,3)
console.log(myn1);

//  splice

console.log("B" , myAry);
const myn2 = myAry.splice(1,3)
console.log(myn2);