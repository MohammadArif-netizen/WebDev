// let myName = "Arif    ";

// console.log(myName.trueLength);


let myHeros = ['thor', 'spiderman'];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects");
}

Array.prototype.heyHitesh = function(){
    console.log('Hitesh said hell0');
}
// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh()
// heroPower,heyHitesh()


// Prototypal Inheritance

const User = {
    username:"Chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignments: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User;

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "ChaiAurCode      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`)
};

anotherUserName.trueLength();

"Arif".trueLength();
"ColdCoffee".trueLength()
