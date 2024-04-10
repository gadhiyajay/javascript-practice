class Employee{
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.getuserdetails = function(){
            console.log(this.name + " age is "+ this.age)
            finalsalary();
        }
        let bonus = 5000;
        let finalsalary = function(){
            console.log('Final Salary for '+name+':'+(salary+bonus))
        }
    }
}
const emp1 = new Employee("Ashish", 22, 25500)
console.log(emp1)