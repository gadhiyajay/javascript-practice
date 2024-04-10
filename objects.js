// const obj = {
//     bookName : "Ramayan",
//     Author : "Valmiki",
//     Desscription : "Victory of Prabhu Shree Ram!!"
// }
// console.log(obj)

function bookConstructor(title){
    this.title = title
    this.available = function() {
        console.log("Book is Available!")
    }
}

const book3 = new bookConstructor("MahaBharat");
book3.Description = "Victory of love!"

console.log(book3)