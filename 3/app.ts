interface x  {
    name : string,
    sclass : string,
    rollno : number,
    books : string[],
   
}
var student:x = {
    name: "Daniyal",
    sclass: "BSCS",
    rollno : 23434,
    books : ["C++","JS","C"],
    
}
console.log(Object.keys(student).length);



