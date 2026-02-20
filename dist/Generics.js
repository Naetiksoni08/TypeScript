"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generics are also like templates just like interfaces just generics makes the code more reusable 
function WrapInArray(item) {
    return [item];
}
WrapInArray("masala");
WrapInArray(42);
WrapInArray({ flavor: "Ginger" });
function pair(a, b) {
    return [a, b];
}
pair("lemon", 20);
pair("lemon", { flavor: "iceTea" });
pair("lemon", true);
const numberBox = { content: "hello" };
const numberBox2 = { content: 10 };
const response = {
    status: 200,
    Data: { flavour: "masala" }
};
//# sourceMappingURL=Generics.js.map