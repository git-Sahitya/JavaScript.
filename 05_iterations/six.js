  
//   const coding = [ "ruby", "php","js","java","reactjs"]

//   const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
//   })
//   console.log(values);

// NOTE :-- The major diff b/t upper And lower code is lower code returns the values of given data but in case of foeEach loop it do not give the value of the given data.




const myNums = [1,2,3,4,5,6,7,8,9,10]

   const newNum =myNums.filter( (num)=> num > 4 );

   console.log(newNum);

//  Note;:-- but same code in curly brakets {}    does not run we  write the {retun } .. because curly brakets open the scope 



const myNums1 = [1,2,3,4,5,6,7,8,9,10]

   const newNum1 =myNums.filter( (num)=> {   
       return  num > 4

    } );

   console.log(newNum1);


   const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBook = books.filter( (bk) => bk.genre === 'Fiction')

  console.log(userBook);

  const newUserBook = books.filter( (bks) => {
    
    return bks.genre === 'History'
  })

  console.log(newUserBook);