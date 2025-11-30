const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user detail from database")
        console.log(this.username);
    }

} 

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, logginCount, isLoggedIn) {
    this.username = username;
    this.logginCount = logginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeating = function() {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const UserOne = new User("hitesh",12,true)
const UserTwo = new User("chaiAurCode",11,false)

console.log(UserOne);
console.log(UserTwo);

// new create an empty object
// value pass
// this add value to object
// return

console.log(UserOne.constructor);

// instanceof in js