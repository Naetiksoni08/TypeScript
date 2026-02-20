"use strict";
// the main goal of interface is to give shape to our object or data
Object.defineProperty(exports, "__esModule", { value: true });
const masala = {
    flavor: "Masala",
    price: 30
}; // this is way to similar to defining alias type. both interface and types have there own advantages and they both can be used interchangeably
const s = {
    id: 1,
    name: "Naetik's Cafe"
};
const apply100 = (price) => price * 0.75; // and this is the usage
const machine = {
    start() {
        console.log("Start");
    },
    stop() {
        console.log("stop");
    }
};
const Rating = {
    masala: 4.5,
    Lemon: 4.0,
};
const u = {
    name: "Naetik",
    age: 19
};
//# sourceMappingURL=interfaces.js.map