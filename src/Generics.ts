// Generics are also like templates just like interfaces just generics makes the code more reusable 
function WrapInArray<T>(item: T): T[] {
    return [item]
}

WrapInArray("masala")
WrapInArray(42)
WrapInArray({ flavor: "Ginger" })


function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}
pair("lemon", 20);
pair("lemon", { flavor: "iceTea" });
pair("lemon", true);


//generics interfaces

interface Box<T> {
    content: T
}
const numberBox: Box<String> = { content: "hello" }
const numberBox2: Box<number> = { content: 10 }


// real word use case of generics is generally in state management in react and api responses


interface ApiPromise<T> {
    status: number,
    Data: T
}

const response: ApiPromise<{ flavour: string }> = {
    status: 200,
    Data: { flavour: "masala" }
}
