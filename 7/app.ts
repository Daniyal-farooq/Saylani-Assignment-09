let str:string = "log"
let strr:string[] = str.split("")


for (let index = 0; index < str.length; index++) {
   
    let str2:string[] = str.slice(index+1,str.length)

    let str3:string[] = [strr[index]]
    console.log(strr[index]);
    
    
    
    for (let index2 = 0; index2 < str2.length; index2++) {
        str3[index2+1] = str2[index2]
        console.log(str3.join(""));
        
    }
    
   
    
}