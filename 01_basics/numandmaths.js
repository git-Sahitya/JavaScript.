
const score = 500

console.log(score);

const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1));


const otherNumber = 123.456

console.log(otherNumber.toPrecision(4));

const hundreds = 100000

console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));



// Maths

console.log(Math.abs(-8));

console.log(Math.round(88.99));

console.log(Math.floor(4.7));

console.log(Math.ceil(9.2));

console.log(Math.min(4,5,7,9,2));

console.log(Math.max(4,5,7,9,2));

console.log(Math.random());


console.log(Math.random()*10);

console.log(Math.random()*10 +1);


const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min )