"use strict";
// entire goal is we dont want if array is string or number inside of if statement
// we are sepating concerns. writing a class for numbers who has compare and wap methods
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// we are not passing NumbersCollection as a type anymore. Instead we pass Sortable
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
