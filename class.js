class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}
const user1 = new User('Jay', 'Gadhiya', 20)
console.log(user1)

class products{
    constructor(itemName, price, discount)
    {
        this.itemName = itemName
        this.price = price
        this.discount = discount
    }
}
const laptop = new products("Asus", 100000, 40)
console.log(laptop)