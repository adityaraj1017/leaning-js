const promiseOne = new Promise(function(resolve, reject) {
    // Do any asyn task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("Asyn task is completed")
        resolve()
    },1000)
})

promiseOne.then(function() {
    console.log("Promised consumed")
})

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Asyn task 2")
//         resolve()
//     },1000)
// })
// .then(function() {
//     console.log("Asyn 2 completed")
// })

const promisThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"hitesh", email:"chai@suttagmail.com"})
    },1000)
})

promisThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username:"hitesh", password:"123"})
        }
        else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally( () => {
    console.log("Promise is either resolved or rejected")
})


const promiseFive = new Promise (function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username:"javascript", password:"123"})
        }
        else {
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumedPromisefive() {
    // const response = await promiseFive
    // console.log(response); // It is not sufficient to handle the error so we use try catch

    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((user) => {
    console.log(user)
})
.catch((error) => {
    console.log(error)
})

// In output fetch display at first then remaing part will display