
// For of loop

let number = [1,2,3,4,5,6,7,8,9]

for (const num of number) {
 //   console.log(`all number is ${num}`);
}

const greeting = " Hello World!!"

for( const  greet of greeting){
  
    // console.log(`Each chat is ${greet}`);
}

// Map

const map = new Map()

map.set('IN' , 'INDIA')
map.set('USA' , 'UNITED STATE OF AMERICA')
map.set('FR' , 'FRANCE')

console.log(map);

for( const [key , value] of map){
    console.log(key , ':-' , value);
}


const myObject = {

    'game1' : "Battle Mobile India",
    'game2' : "clash of clan",
    'game3' : "MineCraft"
}
 
// for( const [key , value] of myObject){                // they are not iteratable   
//     console.log(key , ':-' , value);
// }