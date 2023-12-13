// for each loop

const coding = ['JS', 'Ruby', 'Java', 'Python']

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printItem(item){
//     console.log(item);
// }
// coding.forEach(printItem)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})