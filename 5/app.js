var volume = /** @class */ (function () {
    function volume() {
    }
    volume.prototype.radius = function () {
        var x = prompt("Enter radius with 4 digit deciamal places");
        this.h = parseFloat(x).toFixed(4);
        console.log(this.h);
    };
    volume.prototype.height = function () {
        var y = prompt("Enter radius with 4 digit deciamal places");
        this.r = parseFloat(y).toFixed(4);
        console.log(this.r);
    };
    volume.prototype.calc = function () {
        this.c = 2 * this.r * this.h * 3.1415;
        console.log("The volume of the cylinder in 4 digit places after decimal point is ".concat(this.c.toFixed(4)));
    };
    return volume;
}());
var cylinder = new volume();
cylinder.radius();
cylinder.height();
cylinder.calc();
