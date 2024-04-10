let myarray = new Array(21, 56, 98, 'Jay', 'Jash');
console.log("Array without any changes : "+ (myarray))
console.log(myarray.push('Hello'));
console.log("pushed hello :"+myarray)
console.log(myarray.pop(1))
console.log("poped one element : "+myarray)
console.log(myarray.unshift("Gadhiya"))
console.log("Unshifted Gadhiya : "+myarray)
console.log("Now the array looks like : "+myarray)
console.log("Jay is at : "+myarray.indexOf('Jay'))
console.log("Jash is at : "+myarray.indexOf('Jash'))
console.log("Gadhiya is at : "+myarray.indexOf('Gadhiya'))
console.log("If the element not present in the array, it returns : "+myarray.indexOf('Mevada'))
let newarray1 = [{
    name: "Jay",
    age: 21
    }, {
    name: "Shrey",
    age: 22
    }, {
    name: "Nehil",
    age: 20
    }, ]
console.log(newarray1)
//ARROW FUNCTION...
console.log(newarray1.find((element) => {
    return (element.age >= 20 )
}))

let name1 = ['Jay', 'Jash', 'Shrey']
let name2 = ['Gadhiya', 'TrooTech', 'Koyani']
console.log(name1.concat(name2))
console.log(name1.concat(name2).slice(1, 5))
console.log(newarray1)
// Splitting the array.
console.log(name1[2].split(''))
console.log(name1[2].split('').join('*'))

// for loop in array
for(let i of name1){
    console.log(i)
}
for(let i of name2){
    console.log(i)
}
//////////////////////////////////////////////////////

let cities = [ {
    city: "Mumbai",
    population: 20961000
    }, {
    city: "New York",
    population: 8804190
    }, {
    city: "London",
    population: 9648000
    }]
console.log("**Cities with Populations greater than 100000, given below!")
console.log(cities.filter(city => city.population > 100000))

let population = cities.map(cities => cities.population / 2)
console.log(population)

// ////////////////////////////////////////////////////
// function fetchdata(callback){
//     setTimeout(function(){
//         const data = {name: 'Jay', age:30,};
//         callback(data);
//     }, 000);
// }
// function processData(data) {
//     console.log('Data Received :' ,data);
// }
// fetchdata(processData);