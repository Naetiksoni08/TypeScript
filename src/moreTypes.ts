//we will study forceful type assertion in typescript
// we use "as" keyword to assert the type
// so basically sometimes we need to tell the typescript compiler that Trust me, I know what I'm doing
//Compiler bhai, tum tension mat lo, mujhe pata hai yahan kya data aane wala hai.

let respone: any = "10";
let numericresponse: number = (respone as string).length; // this is called type assertion


// as keyword ka use hum tab karte hain jab humein TypeScript compiler se zyada knowledge hoti hai kisi variable ke type ke baare mein.
// Iska matlab hai: "Compiler bhai, mujhe pata hai main kya kar raha hoon, isse ye type maan lo."
// Ye runtime par data change nahi karta, sirf compile-time par TypeScript ka muh band karta hai.


type book = {
    name: string;
}

let bookstring = '{"name":"the great gatsby"}';
let bookobj = JSON.parse(bookstring) as book;
console.log(bookobj.name); // this is valid and i can access the name property 
// but if i try to access the price property, it will throw an error because price is not a property of the book type
// console.log(bookobj.price); // this will throw an error

const InputElemnets = document.getElementById("username") as HTMLInputElement;





// type keyword in typescript
// we use type keyword to create a new type
// we can use type keyword to create a new type
//TypeScript mein type keyword ka kaam hai ek naya Custom Type (ya alias) banana. Yeh ek blueprint ki tarah hota hai.

//example
type BookCategory = "fictional" | "cinematic";
let myBook: BookCategory;

myBook = "fictional"; // this is valid
// myBook = "horror";    // this is not valid because horror is not a valid BookCategory



//another example of unknown and any


let newvalue: any;
newvalue = 10;
newvalue = [1, 2, 3, 4, 5];
newvalue = "hello";
newvalue = 2.5;
newvalue.toUpperCase(); // this will not an error because any is the data type..


let value: unknown;
value = 10;
value = [1, 2, 3, 4, 5];
value = "hello";
value = 2.5;

//if i will try to do this 
// value.toUpperCase(); // this will throw an error because unknown Says that u can intialise the variable by unknown but before performing any operations on the variable u need to tell the compiler the type of the variable'

if (typeof value === "string") {
    value.toUpperCase(); // this is valid because now the compiler knows that the variable is a string
}//type guards 




try {

} catch (error) {
    //if i will say this will throw an error 
    // console.log(error.mesaage) because we dont know what type of error we are gonna get so one possible solution is use any like error:any but not a good practice 
    //rather we will be using type guards
    if (error instanceof Error) { // if error is the instance of error class then 
        console.log(error.message);
    }

}


const data: unknown = "we will live";
const strData: string = data as string;


//never keyword


// type Role = "admin" | "user";
// function redirectBasedOnRole(role: Role): void {
//     if (role === "admin") {
//         console.log("Redirecting to admin Dashboard");
//         return;
//     }
//     if (role === "user") {
//         console.log("Redirecting to user Dashboard")
//         return;
//     }
//     role;// Yahan tak koi aa hi nahi sakta (Impossible state)
// }


// Tumhare paas Role mein do hi options hain: "admin" ya "user".
// Jab tumne pehla if check kiya (role === "admin"), toh TypeScript ne maan liya ki is block ke andar role admin hai.
// Jab tumne doosra if check kiya (role === "user"), toh TypeScript ne maan liya ki yahan role user hai.
// The "Nothing Left" Moment (Never)
// Ab socho, agar code un dono if blocks se nikal kar aakhri line (role;) tak pahunchta hai, toh role ki value kya bachi?
// Wo admin nahi ho sakta (pehle check ho gaya).
// Wo user nahi ho sakta (doosra check ho gaya).
// Lekin Role type toh sirf yahi do cheezein ho sakta tha!
// Iska matlab, TypeScript ke hisaab se is line tak pahunchne ka koi raasta hi nahi hai. Isliye, is point par role ka type never ho jata hai.



type Roles = "admin" | "user" | "guest";
function redirectBasedOnRole2(role: Roles): void {
    if (role === "admin") {
        console.log("Redirecting to admin Dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user Dashboard")
        return;
    }
    // so the typescript is expecting you to do this 
    // if(role=="guest") {
    //     console.log("Redirecting to Guest dashBoard");
    //     return;
    // }
    role;
}


// Jaise hi tum "guest" add karoge, tumhare redirectBasedOnRole function mein niche wali line (role;) par error aa jayega. Kyun?
// Kyunki ab role wahan par never nahi raha, ab wahan role ka type guest ho gaya hai (kyunki guest wala if toh tumne likha hi nahi!).



function NeverReturn(): never {
    while (true) { }
    // Agar main yahan likhu:
    // console.log("Done"); 
    // Toh TS Error dega: "Unreachable code detected"
}


// Bhai, iska matlab hai "One Way Ticket." Jab tum kisi function ka return type never rakhte ho aur andar while(true) (infinite loop) laga dete ho, toh tum TypeScript ko bata rahe ho ki: "Ye function ek baar shuru hua toh kabhi khatam (return) nahi hoga."