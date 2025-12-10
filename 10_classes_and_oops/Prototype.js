/*
    function ----------
                      | 
    array --------> object -------> null
                      |
    string ------------
*/

let myHeroes = ["Thor","Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all object`)
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh is saying hello`)
}

myHeroes.hitesh()
heroPower.hitesh()
myHeroes.heyHitesh()
// heroPower.heyHitesh()  // Not work because it only apply to array 


// inheritance  (Alowing one object to used the property of another one)

const user = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeacherSupport  // Alow TASupport to access the property of TeacherSupport
}

Teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher)


let anotherUsername = "chaiaurcode    "

String.prototype.truelength = function() {
    console.log(`${this}`)
    console.log(`True length of string is ${this.trim().length}`)
}

anotherUsername.truelength()
"hitesh".truelength()