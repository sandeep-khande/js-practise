// dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreateDate = new Date(2023, 2, 1)
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));




