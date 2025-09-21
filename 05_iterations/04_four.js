// for in loop

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut if for ${myObject[key]}`);
}

// const val in myObject :- value of key

const programming = ["java","python","cpp","js","rb"];

for (const key in programming) {
    console.log(key); // Give key as output :- 0,1,2,3,4
}


// const map = new Map();
// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("Fr","France")

// for (const key in map) {
//     console.log(key);
// }

// Map is not iterable through this forin loop