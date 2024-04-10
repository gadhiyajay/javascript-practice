function oops(){
    for (let i=0; i<10; i++){
        alert("HELLO!!");
    }

}
function whilo(){
    let i=0;
    while(i<10){
        console.log(i);
        i++;
    }
}
function forin(){
    let user={
        name:"Jay",
        age:21,
        role:"Intern"
    }

    for(let i in user){
        console.log(i, user[i])
    }
}