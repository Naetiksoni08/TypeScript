"use strict";
//utility types (very interesting topic)
Object.defineProperty(exports, "__esModule", { value: true });
const updatechai = (updates) => {
    console.log('Updating chai with', updates);
};
updatechai({ price: 25 });
updatechai({ isHot: false });
updatechai({}); // empty object is allowed..
const updateduser = {
    name: "Naetik",
    age: 20 // if i comment age its show age is missing in type..
};
const chai = {
    name: "Masala",
    price: 20
};
const chai2 = {
    name: "Masala",
    price: 20,
    // isHot:false // this is removed
};
const updatedbrew = {
    name: "davidoff",
    price: 900,
    // isHot: false // brew had 3 properties name price and ishot right but when is said from the T remove k that is from T type brew remove K ishot thats it 
};
//so we have 5 types of utility types
// Partial
// Required
// Readonly
// Pick
// Omit
// we have others too but these you must know thats it..
//# sourceMappingURL=UtilityTypes.js.map