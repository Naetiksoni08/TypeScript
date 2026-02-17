"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrice = [10, 20];
// u can define custom data types in Array<number> or predefined also 
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 25 }
];
//readonly array
const cities = ["Jaipur", "Delhi", "Mumbai"];
// cities.push("pune"); shows error because the array is only readonly 
//multidimenstional arrays
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
//tuples in typescript
let chaiTuple;
chaiTuple = ["Masala", 20];
// chaiTuple=["20","Masala"];  this will give error because first element should be string and then number so the sequence matters
let userInfo;
userInfo = ["Naetik", 20]; // boolean was optional
userInfo = ["Naetik", 20, true];
//readonly tuples
const location = ["Mumbai", 20.22];
// named tuples this is more preferable 
const chaiItems = ["Masala", 25];
//enums -- provides restrictions
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
    CupSize[CupSize["EXTRALARGE"] = 3] = "EXTRALARGE";
    CupSize[CupSize["PREMIUM"] = 4] = "PREMIUM";
})(CupSize || (CupSize = {}));
const size = CupSize.EXTRALARGE;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SUCCESS"] = 101] = "SUCCESS";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
var ChaiTYPE;
(function (ChaiTYPE) {
    ChaiTYPE["MASALA"] = "masala";
    ChaiTYPE["GINGER"] = "ginger";
})(ChaiTYPE || (ChaiTYPE = {}));
function makeChai(type) {
    console.log(`Making:${type}`);
}
makeChai(ChaiTYPE.GINGER);
makeChai(ChaiTYPE.MASALA);
//standard or best practices mai we try to define enum as same data type for example enum of string , enum of number
var RandomNumber;
(function (RandomNumber) {
    RandomNumber[RandomNumber["ID"] = 1] = "ID";
    RandomNumber["Name"] = "Naetik";
})(RandomNumber || (RandomNumber = {}));
// this is not a good practice
// Apart from this enum can be defined under const too
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["HIGH"] = 3] = "HIGH";
})(Sugar || (Sugar = {}));
const s = Sugar.HIGH;
const s1 = Sugar.LOW;
const s2 = Sugar.MEDIUM;
let t = ["chai", 10];
t.push("extra");
t.push(20);
//tuples are at the end extension of arrays only and we know that we can push anything in an array so do tuples 
//# sourceMappingURL=Arrays_enum_tuples.js.map