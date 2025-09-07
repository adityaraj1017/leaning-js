// array

const array = [0,1,2,3,4,5];
const superhero = ["Piyakkad","Krish","Jaduu"];

const array2 = new Array(1,2,3,4,5,6);

console.log(array[1]);

// array method

array.push(6) // add element after last element
array.push(7)
array.pop() // remove last element

array.unshift(9) // add element before first element
array.shift() // remove first element

console.log(array.includes(4)) // return boolean defending on the situation
console.log(array.indexOf(4)) // return index of element

const newArray = array.join() // Convert the array into string

console.log(array);
console.log(newArray);

// slice and splice

const myn1 = array.slice(1,4) // Copy the part of array excluding last element
const myn2 = array.splice(1,4) // Remove the part of array including last element

console.log(myn1)
console.log(myn2)