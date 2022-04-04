"use strict";
var Sorter = /** @class */ (function () {
    // this is typescript feature. no need for "this.collection=collection"
    //   iw we add type check for string "number[] | string" then we had to add another check for "linked lists". then we need to have another if(check for linked list)
    // INSTEAD OF DECLARING DIFFERENT TYPES, WE HAVE TO DECIDE WHAT METHODS WE NEED. WE NEED "length" property, "compare" and "swap". so we are going to write an INTERFACE has only those methods
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            //   -i account for the fact that after we do a full iteration through our array first time, rightmost element will be in the correct location.
            // "X.charCodeAt(0)" this is how strings are compared. so we should have 2 if statements, collection is string or array of numbers. we had to change the annotations "collection: number[] | string"
            //   with annotation of "union operator | ", typescript will show us only methods of collection that are common in number or string. so "collection[4]" wont work because this is allowed only for numbers but since strings are immutable, ts knows that we cannot update a string this way, we can read so ts will only allow us read.
            //this logic works only for numbers but if we change the annotation "collection:number[] or |", it wont work
            //   we need to convince ts that this part is numbers so we can assign "col[ind]=col[ind+1]". we us TYPE GUARD
            // if(this.collection instance of Array){ then write the below code}. this is TYPE GUARD
            //   if(typeof this.collection==="string") TYPE GUARD FOR STRINGS
            // -- "typeof used for primities" --- "instanceof" is used ofr other vlaues in TYPESCRIPT.
            // in js we can use "typeof []" but typescript will not accept this as type guard.
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    // this swapping logic is not going to work for strings
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
// es6 swapping [a, b] = [b, a]; in pyhtohn tuples used  a,b=b,a
var sorter = new Sorter([10, 1, 4, 5]);
