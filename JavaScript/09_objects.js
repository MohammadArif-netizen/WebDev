// singleton
// Object.create()


// Object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Arif", 
    "Full Name" : "Arif Mohammad",
    [mySymbol]: "mykey1",
    age: 34,
    location: "Bangalore",
    email: "arif@email.com",
    isLoggedIN: "false",
    lostLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['Full Name']);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser.mySymbol);

JsUser.email = "arif@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arif@google.com"

// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//Singleton Object

const tinderUser = new Object() // Singleton Object
// const tinderUser = {} // not a singleton object

tinderUser.id = '123abc'
tinderUser.name = "Harry"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "harry@email.com",
    fullname:{
        userfullname:{
            firstname: "Harry",
            lastname: "Porter"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course = {
    coursename: "JavaScript in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);



