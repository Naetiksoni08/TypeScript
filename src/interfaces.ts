// the main goal of interface is to give shape to our object or data

interface chai {
    flavor: string,
    price: number
    milk?: boolean
}

const masala: chai = {
    flavor: "Masala",
    price: 30
} // this is way to similar to defining alias type. both interface and types have there own advantages and they both can be used interchangeably



interface shop {
    readonly id: number,
    name: string
}

const s: shop = {
    id: 1,
    name: "Naetik's Cafe"
}

// s.id=2 throws error cuz id is readonly property 

// interfaces are generally used to define the object strucutre it is not used to insert the data for example
interface DisCountCalculator {
    (price: number): number
}//this is the defination of the object

const apply100: DisCountCalculator = (price) => price * 0.75 // and this is the usage

interface TeaMachine {
    // start(price:number):void,
    start(): void,
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("Start");

    },
    stop() {
        console.log("stop")
    }

}


// index signature

interface ChaiRating {
    [flavor: string]: number
}

const Rating: ChaiRating = {
    masala: 4.5,
    Lemon: 4.0,
}


//Merging interfaces

interface user {
    age: number
}

interface user {
    name: string
}

const u: user = {
    name: "Naetik",
    age: 19
}

//Extending interfaces
interface A { a: string }
interface B { b: string }
interface C { c: string }

interface D extends A, B, C { a: "hello", b: "HRU", c: "Bye" } // this is similar to merging interfaces

