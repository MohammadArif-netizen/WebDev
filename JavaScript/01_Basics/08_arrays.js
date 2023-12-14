// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['Batman', 'Spiderman', 'Ironman']
const newArr = new Array(1, 2, 3, 4)

// console.log(newArr[2]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// Inserts value at beggining
// myArr.shift() // removes first value 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr2 = myArr.join()

// console.log(myArr);
// console.log(newArr2);
// console.log(typeof(newArr2));


// Slice, Splice

// console.log("A", myArr);

const myNewArr = myArr.slice(1, 3) // never manupulates original array
// console.log(myNewArr);
// console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3) //Manupulates original array
// console.log("C", myArr);
// console.log(myNewArr2);


const marvel_heros = ['Thor', 'Spiderman', 'Ironman']
const dc_heros = ['Batman', 'Superman', 'Flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // using spread operator.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);

// console.log(Array.isArray("Arif"));
// console.log(Array.from("Arif"));
console.log(Array.from({name: "Arif"})); // Interesting : when it doesnt know how to convert an object to an aaray returns an empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
