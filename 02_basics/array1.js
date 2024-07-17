const marvel_hero = ["Ironman","Thor","Hulk","Captain America"]

const dc_hero = ["Batman","Superman","Aquaman","Flash"]

// const all_hero = marvel_hero.concat(dc_hero)

// console.log(all_hero);

const all_hero = [...marvel_hero,...dc_hero]

console.log(all_hero);

const another_array =[1,2,3,4,[2,3,8,[4,7,0,8],18,39]]

const real_anotherArray = another_array.flat(Infinity)

console.log(real_anotherArray);


console.log(Array.isArray('Sahitya'));
console.log(Array.from('Sahitya'));
console.log(Array.from({name:"Sahitya"}));

let score = 100
let score2 = 200
let score3  = 300

console.log(Array.of(score,score2,score3));