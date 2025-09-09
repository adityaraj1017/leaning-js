// const tinderUser = new Object(); (Singleton object)
const tinderUser = {}
tinderUser.id= "123abc"
tinderUser.name= "Sanny"
tinderUser.isLoggedIn= false

console.log(tinderUser)

const regularUser = {
    email: "sunny8329@gmail.com",
    fullName: {
        userfullName: {
            firstname: "Devbrat",
            lastname: "Yadav"
        }
    }
}
// object inside object, here object is the value of key of object

console.log(regularUser.fullName.userfullName.firstname)
// console.log(regularUser.fullName?.userfullName.firstname) (if fullname is not exist)

// Combining two object
const obj1= {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}

// const obj3= {obj1,obj2} (In this obj1 and obj2 is object inside obj3)
// const obj3= Object.assign({},obj1,obj2)

const obj3= {...obj1,...obj2} // Spread operator
console.log(obj3)

const user = [{email: "abc@gmail.com",id:"!@#123"},{email: "abc@gmail.com",id:"!@#123"}]
// Commanly used in API called

console.log(Object.keys(tinderUser)) // Return key in array format
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn")) 
// Return boolean depending on the situation whether the value is present or not