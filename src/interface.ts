// now from the below to codes we can clearly see that the signature of the code is same and there is a repetition of logic 
// so the easiest way is to define a type

type chaiorder = { type: String, sugar: number, Strong: boolean };


function makechai(order: chaiorder) {
    console.log(order);
}

// function makechai(order: { type: String, sugar: number, Strong: boolean };) {
//     console.log(order);
// } earlier it was like this 

function serveChai(order: chaiorder) {
    console.log(order);
}
// now the code becomes more readable and maintainable 

//-----------------------------------------------------------------------------------
// Interface and type

// There is one Simple Rule:
// Classes can ONLY implement object shapes. They can't implement unions, primitives, or anything else.

type teaRecipe = {
    water: number,
    milk: number
} // this is object shaped so the classes will allow it..

// The error before defining the values -- Class 'MasalaChai' incorrectly implements interface 'teaRecipe'.
// Type 'MasalaChai' is missing the following properties from type 'teaRecipe': water, milk

class MasalaChai implements teaRecipe {
    water = 100
    milk = 100;
}
// the above code works fine but problem arises when this teaRecipe is no more a object shaped..

type cupsize = "Small" | "Medium" | "Large";


//The error I get --a class can only implement an object type or intersection of object types with statically known members

// class size implements cupsize {

// } 
// this thing throws an error Because cupsize is a union of strings, NOT an object shape thats why we need interface and interface is always an object shaped

interface cupsize1 {
    size: "Small" | "Medium" | "Large";
}


class chaisize implements cupsize1 {
    size: "Small" | "Medium" | "Large" = "Large"
}



// type Respone = { ok: true } | { ok: false }

// class ApiResponse implements Respone {
//     ok:boolean=true
// } this is also wrong 

// conversion of above code into Interfacee. There are 2 possible ways 
//1: Single interface 
interface Respone {
    ok: boolean // can be true or false
}

class ApiResponse implements Respone {
    ok: boolean = true;
}

//2: Seperate interface classes

interface SuccessRespone {
    ok: true
}

interface ErrorRespone {
    ok: false
}


type Res = SuccessRespone | ErrorRespone;

class ApiSuccess implements SuccessRespone {
    ok: true = true;
}

class ApiError implements ErrorRespone {
    ok: false = false;
}




//union and interseciton
// this is the example of union(or)
type TeaType = "Masala" | "lemon" | "Ginger"; // this is called literal types

function OrderChai(t: TeaType) {
    // console.log("Masala");
    console.log(t);
    // OrderChai("Green"); // Error!

}


// Intersection (&) = Merging two things together

type Person = {
    name: string;
    age: number;
}

type Employee = {
    employeeId: number;
    department: string;
}

// Intersection = Combine BOTH
type WorkingPerson = Person & Employee;

// Now you MUST have ALL 4 properties
const john: WorkingPerson = {
    name: "John",           // from Person
    age: 30,                // from Person
    employeeId: 12345,      // from Employee
    department: "IT"        // from Employee
};


type user = {
    Username: String;
    bio?: String; // optional
}

const u1: user = { Username: "Naetik" } // works fine without bio cuz it was optional
const u2: user = { Username: "Naetik", bio: "Naetik.ai" }




// readonly means: "You can set this value ONCE, but you can NEVER change it later!"

type ScreenMode = {
    readonly Mode: String,
    version: number
}

const SM: ScreenMode = {
    Mode: "System Default",
    version: 1 // this thing i can change anytime 
}
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