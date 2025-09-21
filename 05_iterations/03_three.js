// for of 

// ["", "" , ""] // String in array
// [{}, {}, {}] // Object in array

const arr = [1,2,3,4,5];

for (const index of arr) {
    console.log(index)
}

const greeatings = "Hello World!";

for (const greet of greeatings) {
    console.log(`Value is ${greet}`);
}


// Maps  

const map = new Map();
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}

// const key of map :- key = ['IN','India']
// const [key] of map :- key = 'IN'
// const [key,value] of map :- key = 'IN' and value = 'India'


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,":-",value);
}

// Object is not iterable with for of loop