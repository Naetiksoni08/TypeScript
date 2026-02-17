const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20];


// u can define custom data types in Array<number> or predefined also 
const rating: Array<number> = [4.5, 5.0]


//Array of objects

type chai = {
    name: string,
    price: number
}

const menu: chai[] = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 25 }
]
//readonly array

const cities: readonly string[] = ["Jaipur", "Delhi", "Mumbai"];
// cities.push("pune"); shows error because the array is only readonly 


//multidimenstional arrays

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]


//tuples in typescript

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple=["20","Masala"];  this will give error because first element should be string and then number so the sequence matters

let userInfo: [string, number, boolean?]

userInfo = ["Naetik", 20]; // boolean was optional
userInfo = ["Naetik", 20, true];


//readonly tuples
const location: readonly [string, number] = ["Mumbai", 20.22];

// named tuples this is more preferable 
const chaiItems: [name: string, price: number] = ["Masala", 25];


//enums -- provides restrictions


enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
    EXTRALARGE,
    PREMIUM
}

const size = CupSize.EXTRALARGE;


enum Status {
    PENDING = 100, // 100
    SUCCESS, // 101
    CANCELLED // 102
}

enum ChaiTYPE {
    MASALA = "masala",
    GINGER = "ginger"
}
function makeChai(type: ChaiTYPE) {
    console.log(`Making:${type}`)
}


makeChai(ChaiTYPE.GINGER)
makeChai(ChaiTYPE.MASALA)


//standard or best practices mai we try to define enum as same data type for example enum of string , enum of number

enum RandomNumber {
    ID = 1,
    Name = "Naetik"
}

// this is not a good practice

// Apart from this enum can be defined under const too

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugar.HIGH
const s1 = Sugar.LOW
const s2 = Sugar.MEDIUM


let t: [string, number] = ["chai", 10]

t.push("extra")
t.push(20)

//tuples are at the end extension of arrays only and we know that we can push anything in an array so do tuples 
