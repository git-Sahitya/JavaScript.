
// for each loop

const codingLang = ["html" ,"css" , "github","js" , "reactjs" , "nodejs","expressjs" ,"mongodb","mySQL"]


// First way to execute the given array+++++++++++++++++++++++++++++++


// codingLang.forEach( function (item){
//     console.log(item);
// });


// Second way to executing the Array++++++++++++++++++++++++++++++++++++


// codingLang.forEach( (val) =>{
  
//     console.log(val);
// });


// Trird way ++++++++++++++++++++++++++++++++++++++++++++++++

// function printMe (item){

//     console.log(item);
// }
// codingLang.forEach(printMe)


//+++++++++++++++++++

 codingLang.forEach((item,index,arr)=>{
    console.log(item,index,arr);
 })


 const myCoding = [

    {
        languageName : "javaScript",
        languageFileName : "js"
    },
    
    {
        languageName : "python",
        languageFileName : "py"
    },
    
    {
        languageName : "HyperText Markup Language",
        languageFileName : "html"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
    
 ]

 myCoding.forEach( (val)=>{
 


     console.log(val.languageName);
     console.log(val.languageFileName);
 })