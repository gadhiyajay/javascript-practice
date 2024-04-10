function focusFunction(element){
    element.style.background = "skyblue";

}
function blurFunciton(element){
    element.style.background = "";

}
function inputFunction(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;

}
function changeFunction(element){
    var y = element.value;
    document.getElementById("test2").innerHTML = y;

}
function selectFunction(element){
    console.log("You selected some text!")
}
function submitFunction(element){
    let a = document.getElementById('fname').value;
     alert('Hello ' + a);
    
}
