"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // private x:number;
    //private y:number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        /*
        this.x = x;
        this.y = y;
        */
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + " " + 'Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
