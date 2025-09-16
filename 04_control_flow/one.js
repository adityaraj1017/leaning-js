// ********** if statement *********

/*
    if(condition) {
        console.log("Work if condition is true.")
    }
*/

const isUserLoggedIn = true;

if(isUserLoggedIn) {
    console.log("Logged In");
}

if(2 != 3) {
    console.log("Executed");
}

// Basic comparison operator are: >, <, >=, <=, ==, !=, ===, !==

// ********** else statement **********

/*
    else{
        console.log("Executed if 'if' constion is false")
    }
*/

const temperatur = 41

if(temperatur < 50) {
    console.log("Temperature is less then 50");
}
else {
    console.log("Temperatue is more than 50");
}

const score = 200

if(score > 100) {
    let power = 'fly';
    console.log(`User power : ${power}`)
}

// console.log(`User power : ${power}`) // Not work due to present of outside the scope



// ********* else if statement **********

/*
    else if is used to check for multiple condition
*/

const balance = 1000

// if(balance<1000) console.log("test1"),console.log("test2"); // Not best practise

if(balance < 500) {
    console.log("Less than 500");
}
else if(balance < 750) {
    console.log("Less than 750");
}
else {
    console.log("Less than 1200")
}


const user_Logger_In = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(user_Logger_In && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

// Some logical operation are: &&, ||