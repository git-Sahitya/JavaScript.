
// Date

let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toLocaleString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toTimeString());

// let myCreatedDates = new Date(2024,0,26)

let myCreatedDates = new Date("01-26-2024")


console.log(myCreatedDates.toDateString());



// Time

let myTimestamp = Date.now()

console.log(myTimestamp);

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);

console.log(newDate.getDay());

console.log(newDate.getMonth());

console.log(newDate.getFullYear());

