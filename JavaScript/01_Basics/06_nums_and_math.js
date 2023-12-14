const score = 400
// console.log(score);
// console.log(typeof(score));

const balance = new Number(1200)
// console.log(balance);

// console.log(balance.toString().length);// converted String and called length method of String
// console.log(balance.toFixed(2));

const value = 123.8966
// console.log(value.toPrecision(3));
// console.log(value.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ************************************************** Maths *******************************************************

// console.log(Math);
// console.log(Math.abs(-63)); // absolute value
// console.log(Math.round(4.75));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.99));
// console.log(Math.min(4, 3, 5, 9, 12, 2, 1));
// console.log(Math.max(4, 3, 5, 9, 12, 2, 1));

console.log(Math.random()); // values would be b/w 0 to 1
console.log((Math.random() * 10) + 1); 
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
