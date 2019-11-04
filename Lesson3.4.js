var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car1 = /** @class */ (function () {
    function Car1(num) {
        this.num = num;
    }
    Car1.prototype.printNum = function () {
        console.log(this.num);
    };
    return Car1;
}());
// var lexus = new Car1(1);
// console.log(lexus.num);
// lexus.printNum();
//access modifiers
// private
//readonly
//protected
var Van = /** @class */ (function (_super) {
    __extends(Van, _super);
    function Van() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Van.prototype.printNum = function () {
        console.log(this.num * 2);
    };
    return Van;
}(Car1));
var lexus = new Van(1);
console.log(lexus.num);
lexus.printNum();
