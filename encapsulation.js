// class Student{
//     constructor(){
//         var studentName;
//         var studentMarks;
//     }
//     setname(studentName){
//         this.studentName = studentName;
        
//     }
//     setmarks(studentMarks){
//         if(studentMarks < 0 || studentMarks > 100){
//             alert("Invalid Marks!")
//         }
//         else{
//             this.studentMarks = studentMarks;
//         }
//     }
//     getname(){
//         return this.studentName 
//     }
//     getmarks(){
//         return this.studentMarks 
//     }
// }
// const s1 = new Student();
// console.log(s1);
class Student {
    constructor() {
        var studentName;
        var studentMarks;
    }
    setname(studentName) {
        this.studentName = studentName;
    }
    setmarks(studentMarks) {
        if (studentMarks < 0 || studentMarks > 100) {
            alert("Invalid Marks!")
        } else {
            this.studentMarks = studentMarks;
        }
    }
    getname() {
        return this.studentName;
    }
    getmarks() {
        return this.studentMarks;
    }
}

const s1 = new Student();
//s1.setmarks(105); // This will trigger the alert and not assign the marks
console.log(s1.getmarks()); // This will output undefined because invalid marks were not assigned
