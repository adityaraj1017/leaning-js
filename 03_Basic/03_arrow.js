const user = {
    username: "Hitesh",
    prize: 399,

    welcomeMassage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this); // Give whole object
    }
}
// this keyword is used to refer the same context

user.welcomeMassage();
user.username = "Sams"; // Update the user name to Sams
user.welcomeMassage();

console.log(this); // {} empty object because there is nothing in global
// In console(devloper tools) this give windows as output.

/*
    function chai() {
        console.log(this); // Give many things in output.
    }

    function chai() {
        let username = "Ramesh";
        console.log(this.username); // Output is undefined
    }

    const chai = function() {
        let username = "Ramesh";
        console.log(this.username); // Output is undefined
    }
*/

const chai = () => {
    let username = "Ramesh";
    console.log(this.username); // Output is undefined
    console.log(this) // Output is {}
}

chai();

// ********** Arrow Function ***********
() => {} // We can store it in variable

const addTwo = (num1,num2) => {
    return num1 + num2;
}

/*
    const addTwo = (num1,num2) => num1 + num2; // Implicit return
    const addTwo = (num1,num2) => (num1 + num2)
    // No need to used return in case of ()

    const addTwo = (num1,num2) => ({name: "Kali Charan"}) // Returing the object from arrow function
*/

console.log(addTwo(5,6));