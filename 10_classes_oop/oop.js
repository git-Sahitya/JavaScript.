  const user  = {
    username : "Sahitya",
    loginCount : 10,
    signedIn : true,

    getUserDetails : function(){    
       console.log(`Username : ${this.username}`);
       
    }     
  }

  console.log(user.username);
  console.log( user.getUserDetails());


  // constructor function  

  function  User( username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
  }

   const userOne = new User("Sahitya Singh" ,12,true)
   const userTwo = new User(" Harshal Singh" ,7,false)
      
  console.log(userOne);
  console.log(userTwo);

