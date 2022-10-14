
class volume {
    h:number;
    r:number;
    c:number;
    radius(){
        let x:string= prompt("Enter radius with 4 digit deciamal places")
        this.h = parseFloat(x).toFixed(4)
        console.log(this.h);
        
    }
    height(){
        let y:string = prompt("Enter radius with 4 digit deciamal places")
        this.r  = parseFloat(y).toFixed(4)
        console.log(this.r);
        
    }
    calc (){
        this.c = 2 * this.r * this.h * 3.1415 
        console.log(`The volume of the cylinder in 4 digit places after decimal point is ${this.c.toFixed(4)}`);
        
    }
}
let cylinder = new volume()
cylinder.radius()
cylinder.height()
cylinder.calc()
