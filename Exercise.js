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
var Furniture = /** @class */ (function () {
    function Furniture(dimension) {
        this.dimension = dimension;
    }
    Furniture.prototype.getDimension = function () {
        if (this.dimension == 2) {
            return this.length * this.height;
        }
        else if (this.dimension == 3) {
            return this.length * this.height * this.width;
        }
        return 0;
    };
    return Furniture;
}());
var TV = /** @class */ (function (_super) {
    __extends(TV, _super);
    function TV(height, width, length) {
        var _this = _super.call(this, 2) || this;
        _this.height = height;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    return TV;
}(Furniture));
var Couch = /** @class */ (function (_super) {
    __extends(Couch, _super);
    function Couch(height, width, length) {
        var _this = _super.call(this, 3) || this;
        _this.height = height;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    return Couch;
}(Furniture));
var tv = new TV(20, 30, 60);
var couch = new Couch(6, 4, 3);
console.log(tv.getDimension());
console.log(couch.getDimension());
