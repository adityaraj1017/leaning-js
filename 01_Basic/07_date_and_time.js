let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString()); // Output in mm-dd-yyyy formet

/*
    Take a look of mdn document for some more properties of Date.
*/

// If we have to declare particular date
let createdDate = new Date(2023,0,4); // CreateDate is 04-01-2023
console.log(createdDate.toDateString());

/*
    If we have to specify the particular date with time then, new Date(2023,0,4,5,23);
    in yyyy-mm-dd format, new Date("2023-01-05")
    in mm-dd-yyyy format, new Date("01-05-2023")
*/

let myTimeStamp = Date.now(); // In millisecond wrt 01 Jan 1970
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000)); // Time in second

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()); // Month start from 0
console.log(newDate.getFullYear());

// We can also control the display 
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))