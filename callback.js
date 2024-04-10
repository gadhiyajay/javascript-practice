// // // // const prompt=require("prompt-sync")({signit:true});

// // // // let a = prompt("Hello Enter your Name : ");
// // // // let b = prompt("Hello Enter your Age : ");
// // // // let c = prompt("Hello Enter your Favourite Color : ");
// // // // console.log("Hello, "+ a + " Your Age is " + b + " and " + c + " is your favorite color.");
// // console.log("Start...")
// // setTimeout(()=>{
// //     console.log("Hello bhai, how are you!??");
// // },1)
// // console.log('ENDDDd......')
// // // const prompt=require("prompt-sync")({sigint:true});

// // console.log('Callback Tutorial');
// // // Synchronous Javascript
// // // let a = prompt("hello enter your name ");
// // // let b = prompt("hello enter your age ");
// // // let c = prompt("hello what color you like ");
// // // console.log("hello "+a+" your age is "+b+" and "+c+" is you favorite color");

// // // Asynchronous Javascript
// // // console.log("start");
// // // setTimeout(()=>{
// // //     console.log("Hello Bhai Kaise ho")
// // // },3000)
// // // console.log("end")

// // // Callback Functions
// function setstyle(href, callback){
//     let link = document.createElement('link')
//     link.rel="stylesheet";
//     link.href = href;
//     link.onload = ()=>{
//         console.log("Link Created "+href);
//         callback(null,href);
//     }
//     link.onerror = ()=>{
//         console.log("Error Aagai Bhai "+href);
//         callback(new Error("Link Me Error Hai Boss"));
//     }
//     document.head.appendChild(link)
// }
// function doneHogya(error,src){
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log("Link Add Hogya Hai Boss "+src)
// }


// setstyle('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',doneHogya)
// //setstyle('https://cdn.jsdelivrnpm/bootstrap@4.0.0/dist/css/bootstrap.min.css',doneHogya)


// console.log("Starting")
// setTimeout(()=>{
//     console.log("Hello World, How are you all!!!????");
// }, 3000)
// console.log("End before the real End!")
function setstyle(href, callback){
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () =>{
        console.log("Link added! " + href);
        callback();
    }
    link.onerror = () =>{
        console.log("Error occured in adding the link : " + href);
        callback(new Error("Su bhai, Error occured!"))
        }
        document.head.appendChild(link);
}
function completed(error){
    if(error){
        console.log(error);
        return
    }
    console.log("Link Addeddd!!");
}

setstyle('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css', completed);