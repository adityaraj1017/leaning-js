// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // Named iife
    console.log("DB Connected")
})();

// ()() First one if function defination and second one is function execution
// iife is used to tolerate the problem of global scope

// Used semicolom to end the one iife if there is many iife

( ()=> {
    // Simple or unnamed iife
    console.log("DB Connected Two")
})()

/*
    If we have to pass some argument:-
    ( (name)=> {
        console.log("DB Connected Two ${name}")
    })('Ashutosh')
*/

const name = "Aditya";
console.log(`Welcome to website, ${name}`);