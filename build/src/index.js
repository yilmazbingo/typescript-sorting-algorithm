"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//the comparison and swapping has to be customized based on the type of data we are working with.
// comparison and swapping logic will be extracted in to different class
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
// we changed collection type to Interface. numberCollection satisfis this interface
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
var charachersCollection = new CharactersCollection_1.CharactersCollection("xbhwhR");
var sorter = new Sorter_1.Sorter(charachersCollection);
sorter.sort();
console.log(charachersCollection.data);
