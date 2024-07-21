
const myObject = {

    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift for apple'
  }

  for (const key in myObject){

   //console.log(`${key}  shortcut is for ${myObject[key]}`);
  }

   const myArray = ["html" ,"css" , "github","js" , "reactjs" , "nodejs","expressjs" ,"mongodb","mySQL"]

   for(const key in myArray){
    console.log(`${myArray[key]}`);
   }