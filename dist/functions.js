"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makechai(type, cups) {
    console.log(`making ${cups} cups of ${type}`);
}
makechai("Masala", 2);
function getchaiprice() {
    return 25;
} // data type of getchaiprice should come in number
function logchai() {
    console.log("chai is ready");
} // nothing to return cuz void
//optional parameter
function order(type) {
    console.log(type); // prints undefine
}
// What this means:
// type may come
// type may not come
// If it comes → it must be a string
// If it doesn’t come → it will be undefined
// internally ts treats it as type: string | undefined
order("Ginger");
order(); // both is correct cuz string or undefined
//defualt parameter
function orderchai(type = "Masala") {
    console.log(type); //here we dont have  the type as string|undefined we only have string here 
}
orderchai("Green"); // type = "Green"
orderchai(); // type = "Masala"
function CreateChai(order) {
    return 5;
} // this is a syntax its easy
//# sourceMappingURL=functions.js.map