// Singleton (Object belong to only one in his category)
// Object.create

// Object literals
const mySym = Symbol("key1");

const jsUser = {
    name: "Ankit",
    "full name": "Kumar Lokesh Rahul",
    age: 29,
    [mySym]: "myKey",
    email: "ankit0401@gmail.com",
    isLogginedIn: false,
    lastLoggined: ["Monday","Satursday"],
}
// Every key and value are store in string format, and there is no requried to decalre key in string format it interprect in string only.

console.log(jsUser.email); // Using . to excess the key value pair
console.log(jsUser["email"]); // Using [] to excess the value in this we have to used string for key
console.log(jsUser["full name"]); // Only by this way
console.log(jsUser[mySym]);

jsUser.email= "ankit0242@chatgpt.com";
// Object.freeze(jsUser); // Doesn't allow to change key value pair
jsUser.email= "ankit02504@hotmail.com";
// console.log(jsUser);

jsUser.greating= function() {
    console.log("Hello, How are you");
}

console.log(jsUser.greating); // anonymous function
console.log(jsUser.greating());