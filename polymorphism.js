class animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name+' Please Specify Animal!');
    }
}
// here is also an example of method overriding.!
class dog extends animal{
    speak(){
        console.log("Woof! woof!");
        super.speak();
    }
} 
const c = new animal('Tom');
const d = new dog('Olivier');
c.speak();
d.speak();