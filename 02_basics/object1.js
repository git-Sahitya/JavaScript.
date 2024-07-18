
const regularUser ={
    email : "some@Microsoft.com",

    fullName : {
        userFullName : {
            name : "Sahitya ",
            lastName : "Singh"
        }
    }
}
 console.log(regularUser.fullName.userFullName.name);




    const User = {}
 
     User.name = "Sahitya"
     User.branch = "CSE"

     console.log(User);


     const obj1 = {1:"a" , 2:"b"}
     const obj2 = {2:"a" , 3:"b"}
     const obj3 = {4:"a" , 5:"b"}

    //  const obj4 =Object.assign({},obj1,obj2,obj3)
    //  console.log(obj4);

    const obj4 = {...obj1,...obj2,...obj3}
    console.log(obj4);



    const holders = [
        {
            id : 2102830100024,
            email : "sahitya@insta.com"
        },
        {
            id : 589,
            email : "ssqgw@oujefuj.com"
        },
        {
            id : 589,
            email : "ssqgw@oujefuj.com"
        },
        {
            id : 589,
            email : "ssqgw@oujefuj.com"
        }
    ]

    // console.log(holders);
    
     console.log(holders[0]);
     console.log(holders[0].id);
     console.log(holders[0].email);