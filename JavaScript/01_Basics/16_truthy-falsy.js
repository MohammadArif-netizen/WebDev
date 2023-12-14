// const useremail = "arif@email.com";

if(useremail){
    // console.log("Got user email");
}else {
    // console.log("User email not received");
}


// const useremail = "";

if(useremail){
    // console.log("Got user email");
}else {
    // console.log("User email not received");
}


// const useremail = [];

if(useremail){
    // console.log("Got user email");
}else {
    // console.log("User not received");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// true, 1, "0", " ", "false", [], {}, function(){}

//checking array
if (useremail.length === 0) {
    // console.log("Array is empy");
}

//checking object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}



// Nullish Coalescing Operator(??): null, undefined

let value1;
// value1 = 5 ?? 10;
// value1 = null ?? 10;
// value1 = undefined ?? 15;
value1 = null ?? 10 ?? 25

// console.log(value1);


// Terniary Operator
// condition ? true: flase

const iceTeaPrice = 100;

iceTeaPrice >=80 ? console.log("greater than 80") : console.log("less than 80");

