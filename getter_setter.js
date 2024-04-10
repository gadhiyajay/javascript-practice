class products{
    constructor(itemName, price, discount)
    {
        this.itemName = itemName
        this.price = price
        this.discount = discount
    }
    get discountprice(){
        return this.discount+'% Discount is Available'
    }
    set setdiscount(value){
        this.discount = value
    }
    discountedprice(){
        return this.price-this.discount*this.price/100;

    }

}
/// Child Class!!
class furniture extends products{
    constructor(itemName, price, discount, material_type){
        super(itemName, price, discount)
        this.material_type = material_type
    }
}

const chair = new furniture("Chair", 2500, 20, "Wooden")
console.log(chair)


const laptop = new products("Asus", 100000, 40)
console.log(laptop)
