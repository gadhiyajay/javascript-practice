// console.log("setTimeout")
// let a = setTimeout(()=>{
//     console.log("Inside the timeout function.")
// }, 1000);
// let b = prompt("Do you want to show setTimeout?")
// if(b == 'n'){
//     clearTimeout(a);
//     setTimeout(()=>{
//         alert("Don't wait after saying no to to setTimeout!!")
//     }, 1000);
// }
// console.log("Sum coming after 3 seconds :")
// function sum(a, b){
//     console.log("Sum :"+(a+b));
// }
// setTimeout(sum, 2000, 20, 12);
//********** */ Set Interval *****************

let x = setInterval(()=>{
    console.log('Heyy, this is inside a Interval function!')
}, 2000)

// For preventing the interval to go in infinte loop, we can use setTimeOut function.

setTimeout(()=>{
    clearInterval(x);
    console.log("This is outside the interval as the interval timeout was reached!")
}, 5000)