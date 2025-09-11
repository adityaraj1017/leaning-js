let a = 10
const b = 20
var c = 30
// Global scope (Used throughout the program)

if(true) {
    let a = 100
    const b = 200
    var c = 300
    // Block scope (Only used in this block)
    // Global is used in this, but block is not used outside the {}
}
// {} is scope, if we declare any variable in this scope then it is only used in this only.
// Outside this it is undefined.
// var is creating problem for the scope, so let is introduced to overcome the problem

console.log(a)
console.log(b)
console.log(c)


// ********* Scope in function *********

function one() {
    const username = "Hitesh"

    function two() {
        const websites = "Youtube"
        console.log(username)
    }
    // console.log(websites) // Not work due to out of scope
    // Child function access parent variable, but not vice-versa.

    two()
}

one()


// ********** Scope in if-else ***********

if(true) {
    const username = "Hitesh"
    
    if(username === "Hitesh") {
        const websites = " youtube"
        console.log(username + websites)
    }

    // console.log(websites) // Not access due to out of scope
}

// console.log(websites) // Not access due to out of scope


// ************** Interesting **************

// addOne(5) // In this function declaration we can used funtion before declaration
function addOne(value) {
    return value + 1
}

addOne(5)

// addTwo(5) // In this function declaration we cann't used funtion before declaration
const addTwo = function(value) {
    return value + 2
}

addTwo(5)