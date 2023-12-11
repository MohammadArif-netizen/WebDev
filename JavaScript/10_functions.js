function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("F");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);


// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Arif"))
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function loginUserMessage(username = "Harry"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Arif"));

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));


// function calculateCartPrice(...num1){ // ... is a rest operator 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 1000));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000)); 


const user = {
    username: "Arif",
    salary: 10000
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and salary is ${anyobject.salary}`);
}
// handleObject(user)
handleObject({
    username: "Harry",
    salary: 25000
})

const newArray = [200, 400, 780, 140]

function returnSecondValue(getArray){
    return getArray
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 780, 140]))