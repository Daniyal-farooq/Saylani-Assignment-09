interface x {
    name:string,
    sclass:string,
    rollno:number
} 
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}
let prop:string = Object.keys(student).join(",");
console.log(prop);

