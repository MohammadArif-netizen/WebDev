// immediatly invoked funtion expression

/* IIFE used to invoke the function immediatly to avoid the global scope polution and some times to connect the DB immediatly.*/

(function chai(){
    // named iife
    console.log("DB connected");
})(); // ';' is must. it ends code execusion. otherwise will get error in next line of code execusion.

(() => {
    console.log("DB connected two");
})();


((name) => {
    console.log(`DB connected ${name}`);
})('Oracle');