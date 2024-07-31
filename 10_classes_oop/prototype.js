
let  myName = "Sahitya"

console.log(myName.length);

let myHero = [" Cap.Jack Sparrow" , "Willy Wonka","Mad Hatter"]

let heroPower = {
    thor : "Hammer",
    ironman : "genius",

    getSpiderPower  : function(){
        console.log(`Tony power is ${this.ironman}`);
    }
}

Object.prototype.JOJO = function(){
    console.log(`jojo is present in all object`);
}
//heroPower.JOJO()

myHero.JOJO()

