// Immediately Invoked Function Expressions (IIFE)

(function chai (){

    console.log(`DB Connected`);
})();

( () =>{

    console.log(`DB Connected Twice`);
})();


( (name) =>{

    console.log(`          ${name} ,DB Connected Twice`);

})("MONGO");