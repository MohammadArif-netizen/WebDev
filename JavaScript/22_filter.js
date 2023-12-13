
// const coding = ['JS', 'Ruby', 'Java', 'Python']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )
// console.log(values); // for-each does not return any value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter( (num) => num > 4)
// console.log(values);

// const values = myNums.filter( (num) => {
//     // num > 4
//     // return num > 4; // explicitly we have use 'return' in scope {}
// })
// console.log(values);

const books = [
    { title: 'book one', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'book two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'book three', genre: 'Science', publish: 1999, edition: 2007 },
    { title: 'book one', genre: 'History', publish: 1989, edition: 2010 },
    { title: 'book one', genre: 'Non-Fiction', publish: 1982, edition: 2012 },
    { title: 'book one', genre: 'History', publish: 2009, edition: 2016 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter((bk) => bk.publish >= 1990 && bk.genre === 'History')
console.log(userBooks);
