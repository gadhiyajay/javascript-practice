console.log("Working with APIs")
url = "https://catfact.ninja/fact"
let myapi = fetch(url)
myapi.then((value)=>{
    console.log(value)
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((result)=>{
    console.log(result.fact)
    let myp = document.createElement("p")
    myp.textContent = result.fact
    document.querySelector('body').appendChild(myp)
    
})