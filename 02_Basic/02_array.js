const marvel_heroes = ["ironman","thor","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes);
// add all dcHeroes to marvel as last element of marvel Heroes.

const all_heroes = marvel_heroes.concat(dc_heroes)
// combine the array

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// sprade operator sprade all the element present in the array

console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],4,5,[1,3,4,[5,7]]]
const new_another_array = another_array.flat(2)
console.log(new_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name : "hitesh"})) // interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3)) // make an array taking all the variable as element