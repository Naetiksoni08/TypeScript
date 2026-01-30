"use strict";
// type anotation and inference
// these are 2 terms which we have study
// anotation simply means say i have a x person and i have to tell me him to do some work continuosly so basically im anotating him(samjhana kisi ko)
// infer basically means that i dont need to tell that x person abt something it will automatically understand it by itself(khudh samjh jana) 
Object.defineProperty(exports, "__esModule", { value: true });
// examples
let drink = "coffee"; // so once i write this the compiler will automatically understand that let drink:string (type) but if i do this
// drink = 2 this will give me an error because the expected value should be string so this is infering so basically in typescript we have variables like let , const , null ,undefined and all the other javascript variables
// the point is that we dont always need to explicitly tell the compiler that drink:string so basically in most of the cases typescript will automatically infer to your code u dont need to annotate everytime
//examples 2
let cup = Math.random() > 0.5 ? 10 : 5; // now the ts will automatically infer that the value that will be assigned into cups will be a number but
let cup2 = Math.random() > 0.5 ? 10 : "5"; // if i write like this then if u will hover it will show u that let cup2 : number|string ie either number or string type of value can come in the cup2 variable 
let name = "naetik";
// name = 123;  the error is that Type 'number' is not assignable to type 'string' so this is a very common error  
// ANOTATION - means that we need to anotate or like tell the compiler specify the type
//example
let firstname = "Naetik"; // this is anotating
let lastname = "soni";
//thats it 
// now there are diff types of anotation in typescript like number,string,boolean 
function greet(name) {
    return `Hello ${name}, This is my first typescript code.`;
}
// console.log(greet(20)) //  the error Argument of type 'number' is not assignable to parameter of type 'string'.
// Thats it....
//# sourceMappingURL=anotation_and_infer.js.map