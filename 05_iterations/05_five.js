// forEach

const programming = ["java","python","cpp","js","rb"];

programming.forEach( function (value) {
    console.log(value);
} )  // Function call back

programming.forEach( (value) => {
    console.log(value);
} )  // Using arrow function


function printMe(items) {
    console.log(items);
}

programming.forEach(printMe)  // Here we have to pass function reference 

programming.forEach( (value,index,array) => {
    console.log(value,index,array);
} )

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "ja"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach( (items) => {
    console.log(items.languageName);
} )
