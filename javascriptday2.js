const { add, sub } = require('./Math/math')
const fs = require('fs');
const textContent = "Hello , this is introduction to nodejs ";
// fs.writeFileSync('content.text',textContent,(err)=>{
//     if(err){
//         console.log("error occured",err);
//         return;
//     }
//     else{
//         console.log('file written')
//     }
// })




console.log("hello world")
console.log(add(4, 10))
console.log(sub(10, 5))




//Callback function

function greet(name, callback) {
    console.log("hello", name)
    callback();

}

function goodMorning() {
    console.log("Good morning");
}

greet("Abhishek", goodMorning);

//
// setTimeout(()=>{
//     console.log('Running after 5 second  ')   // SetTimeout is method that executes a specified function or piece of code after after a designated delay
// },5000)

// setInterval(()=>{
//     console.log("Run after every 2 sec ")
// },2000)

// setInterval is method that repeatedly executes a function after specified time interval

//clearInterval will stop the setInterval   by targeting unique ID
// let count = 5

// const interval = setInterval(() => {
//     console.log("count", count);
//     count--;
//     if (count < 0) {
//         clearInterval(interval);
//         console.log("countdown finished!")
//     }
// }, 2000)


//callback hell
// getUser(id, (user) => {
//     getOrders(user, (orders) => {
//         getInvoice(orders, (inv) => {
//             sendEmail(inv, () => {
//                 console.log("Done!");
//             });
//         });
//     });
// });




//Promise :  It is an object representing thee eventual completion or failure of an 
// asynchronous operation and its resulting  value

let p1 = new Promise((resolve, reject) => {

    resolve("hello ,I have   fulfilled my promise");

})
p1.then((res) => {
    console.log("result of promise: p1", res)
}).catch((err) => {
    console.log("error in promise p1", err)
}).finally(()=>{
    console.log('finally')
})

let p2 = new Promise((resolve, reject) => {

   reject("hello ,I have  not  fulfilled my promise");

})
p2.then((res) => {
    console.log("result of promise: p2", res)
}).catch((err) => {
    console.log("error in promise  p2", err)
}).finally(()=>{
    console.log('finally')
})
