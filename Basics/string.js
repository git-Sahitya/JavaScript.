 const gameName = new  String("Sahitya-Singh")
 
 console.log(gameName);
 
 console.log(gameName[0]);
 
//  lenght

 console.log(gameName.length);

//  toUpperCase

 console.log(gameName.toUpperCase());

//  charAt

 console.log(gameName.charAt(4));

//  indexOf

 console.log(gameName.indexOf("a"));


//  substring

 const newString = gameName.substring(0 , 4)
 
 console.log(newString);

//  slice

 const anotherString = gameName.slice(2 ,6)

 console.log(anotherString);

//  trim
  
 const newString1 ="    Sahitya   "

 console.log(newString1);

 console.log(newString1.trim());

//  replace

 const url = "https://Sahitya.com/sahitya%20Singh"

 console.log(url);

 console.log(url.replace('%20' , "-"));

//  includes

console.log(url.includes('Sahitya'));

console.log(url.includes('kumar'));

// split

const gameNameOne = "Battle-Mobile-India"

console.log(gameNameOne.split('-'));
 