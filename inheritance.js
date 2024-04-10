class animal{
    constructor (name, speed){
    this.name = name
    this.speed = speed
    }
    getspeed() {
    return console.log(this.name+' Runs with Speed '
    +this.speed)
    }
    }
    const ani = new animal('Tom',50);
    // const lion = new animal('Lion', 100);
    //console.log(lion)


class monkey extends animal{
    jump(){
        return console.log(this.name+' Jumps on Trees')
    }
}

class rhino extends animal{
    horn(){
        return console.log(this.name + ' Have Horn and is a Big and Heavy animal.')
    }
}
console.log(ani)
const m = new monkey("Ape", 50)
console.log(m)
const r = new rhino("RayRhinoo", 20)
console.log(r)
