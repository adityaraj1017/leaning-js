const name = "Kumar Aditya Raj"
const repo = 4

// console.log("My name is " + name + ". I have created " + repo + " repositories.")
// Outdated way for string.

console.log(`My name is ${name}. I have created ${repo} repositories.`)
// Modern way for string known as string interpolation. We can apply different method on the variable inside the parenthesis.

const gameName = new String("Battle Ground") // using an object method

console.log(name) // ouput is in normal form
console.log(gameName) // output in object format

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName) // No change in orinal value

console.log(gameName.charAt(3)) // Return the letter at index 3
console.log(gameName.indexOf("t"))

console.log(gameName.substring(0,4)) // End value is not included
console.log(gameName.slice(-13,4)) // We can used negative value. Negative value start from -1 from end.

const newString = "    Hello World    "
console.log(newString)
console.log(newString.trim()) // Remove start and last whitespace, present in string

const url = "https://piyakkad.com/aman%20jha2"

console.log(url)
console.log(url.replace("%20","-")) // Replace the substring with the new value

console.log(url.includes("piyakkad")) // Return true or false depending on the present of the value
console.log(url.includes("sugan"))

console.log(gameName.split(" ")) // Split the string depending upon the split value