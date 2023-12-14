// var c = 367

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// // console.log(a);
// console.log(b);
// console.log(c);


let a = 1500
if(true){
    let a = 10
    const b = 20
    // console.log("INNER :", a);
}
// console.log(a)


function one(){
    const username = "Arif";
    function two(){
        const website = "YouTube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username = "Arif";
    if(username === "Arif"){
        const website = "YouTube";
        console.log(username);
    }
    // console.log(website);
}