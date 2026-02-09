"use strict";
// now from the below to codes we can clearly see that the signature of the code is same and there is a repetition of logic 
// so the easiest way is to define a type
Object.defineProperty(exports, "__esModule", { value: true });
function makechai(order) {
    console.log(order);
}
// function makechai(order: { type: String, sugar: number, Strong: boolean };) {
//     console.log(order);
// } earlier it was like this 
function serveChai(order) {
    console.log(order);
}
// The error before defining the values -- Class 'MasalaChai' incorrectly implements interface 'teaRecipe'.
// Type 'MasalaChai' is missing the following properties from type 'teaRecipe': water, milk
class MasalaChai {
    water = 100;
    milk = 100;
}
class chaisize {
    size = "Large";
}
class ApiResponse {
    ok = true;
}
class ApiSuccess {
    ok = true;
}
class ApiError {
    ok = false;
}
function OrderChai(t) {
    // console.log("Masala");
    console.log(t);
    // OrderChai("Green"); // Error!
}
// Now you MUST have ALL 4 properties
const john = {
    name: "John", // from Person
    age: 30, // from Person
    employeeId: 12345, // from Employee
    department: "IT" // from Employee
};
const u1 = { Username: "Naetik" }; // works fine without bio cuz it was optional
const u2 = { Username: "Naetik", bio: "Naetik.ai" };
const SM = {
    Mode: "System Default",
    version: 1 // this thing i can change anytime 
};
// SM.Mode="Dark"; //  ERROR! Can't change it because it's readonly
SM.version = 2; // this wont give error but the one which u have made readonly will give error..
// Some examples 
// Option 1: Use Readonly<Type> Utility
// type ScreenMode = {
//     Mode: String,
//     version: number
// }
// // Make the ENTIRE object readonly
// const SM: Readonly<ScreenMode> = {
//     Mode: "System Default",
//     version: 1
// }
// SM.Mode = "Dark";      //  ERROR! readonly
// SM.version = 2;        //  ERROR! readonly (now this is also locked!)
// const SM = {
//     Mode: "System Default",
//     version: 1
// } as const;
// SM.Mode = "Dark";      // ERROR!
// SM.version = 2;        // ERROR!
//# sourceMappingURL=interface.js.map