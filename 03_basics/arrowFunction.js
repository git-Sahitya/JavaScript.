
const  user = {
    userName : "Sahitya",
    price : 1000,

    welcomeMessages :  function(){
        console.log(`${this.userName}, welcome to my website`);
    }
}

 user.welcomeMessages()
 user.userName = "Harshal"
 user.welcomeMessages()



//  //++++++++++++++++++++

 function chai (){
    let username = "Sahitya"
    console.log(this);          // it means this can not used in function they only use is objects.
 }
 chai()

   //++++++++++++++++++

   const chai = () => {
    let usename = "jojo"
    console.log(this);
   }
 
 chai()

 // Basics arrow function++++++

  const addTwo = (num1 , num2) =>{
    return num1 + num2
  }

  console.log(addTwo(7,2));

  // Implicit return ++++++++++++

  const addThree = (num1,num2,num3) => num1 + num2 + num3

  const addThree1 = (num1,num2,num3) => (num1 + num2 + num3)

  console.log(addThree(7,7,7));

  console.log(addThree1(9,9,9));


  // for object In Arrow function
 
   const game = (num1 ,num2) => ({username : "Ram"})

   console.log(game(3,4));