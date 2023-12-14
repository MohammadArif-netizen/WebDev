const user = {
    username:"Arif",
    salary: 25000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Harry"
// user.welcomeMessage()

// console.log(this); // outside scope returns empty object in node environment, returns window in browser

// function chai(){
//     const username = "Arif"
//     console.log(this.username);
// }

// chai() // o/p undefined. we can not access variable with 'this' in  functions.


// const chai = function(){
//     const username = "Arif"
//     // console.log(this.username);
//     // console.log(this);
// }

// chai()

// const chai = () => {
//     const username = "Arif"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 ); // return not required when we use (). return must when we use {}.

const addTwo = (num1, num2) => ({username: "Arif"}) // object must be wrapped with ().

console.log(addTwo(3, 2));
