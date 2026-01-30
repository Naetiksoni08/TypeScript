"use strict";
// see we will study union and any now
// union basically means all like a universal set and intersection means common 
// so i cna write like this
Object.defineProperty(exports, "__esModule", { value: true });
let subs = 10; // this is valid becuase type is number
subs = "1 Million"; // this is also valid because type is string
//so why it is called union because number+string both the type of values will work
//another example 
let apirequest = "Pending"; // this means that api request can only have pending,success and error state and by defualt it will be pending
// apirequest = "done" // now i cant do this because it can only be pendingm,success,error 
//UNKNOWN VS ANY DATA TYPE
//typescript usually says that u need to fix the variable data type for example
let age = 10;
//But now comes any.. any basically says that give me any data type whether it be a number,String,boolean anything mujhe sab accepted hai but due to this typescript ki typechecking/safety khatam ho jati hai aur code js jaise unsafe raheta hai 
//any = no rules, no safety, pure JavaScript mode but any can cause runtime errors
// example
let x = 10;
x = "hello";
x = true;
// console.log(x) // any
// x.toUpperCase();
// this was any now there is another data type called unknown which almost behaves same as any
//In Any
let x1 = 'hello';
// x1.toUpperCase(); // allowed
//In Unknown
let x2 = "hello";
// x2.toUpperCase(); //  error 
// so basically unknown means that 
// Aap variable ko initialize kar sakte ho,
// lekin us par koi operation perform karne se pehle
// TypeScript ko batana padta hai ki wo kis data type ka hai.
// another example
let value = "hello";
// value.toUpperCase(); not allowed you need to first tell the type of the value then only u can perform any operations on it 
//so basically how do i use unknown 
let y = 'hi';
if (typeof y === 'string') {
    y = y.toUpperCase(); // need to store the new value of y otherwise the output will be hi only Strings are immutable ie it cant be changed..
    console.log(y);
}
//Hence, we got to know that unknown is actually more safer than any..
//# sourceMappingURL=union_and_any.js.map