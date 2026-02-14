let tea: {
    name: string;
    price: number;
    isHot: boolean
}
tea = {
    name: "Ginger tea",
    price: 20,
    isHot: true
}

type Tea = {
    name: string,
    price: number,
    Ingredients: string[]
}

const chai: Tea = {
    name: "Adrak chai",
    price: 25,
    Ingredients: ["Milk", "Sugar", "Ginger"]
}

//duck typing
type brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" }
const chaiBrew: brew = coffee
// here what i did i made a brew object first
// then i made coffee and added brewTime and another field name beans
//now interestingly i made chaibrew and said its data type is brew that 
//means brewtime hona chhaiye as field but then i assigned coffee object to it and it
//didnt gaved me any error why so because the bare minimum property is 
//satisfied in coffee also that is brewTime. so that means ki adding 
// new properties wont give an error until and unless the bare minimum
// properties are satisfied for example if brewtime is satisfied then
// adding beans wont give an error.



// Why no error?
// Because TypeScript uses structural typing, not nominal typing.
// That means:
// It doesn’t care about the name of the type.
// It only cares about the shape (structure).
// Your Brew type says:
// "I only require brewTime: number"
// Now look at coffee:
// { brewTime: 5, beans: "Arabica" }
// It HAS:
// ✔ brewTime
// ✔ and extra stuff (beans)
// TypeScript says:
// “Okay cool, you gave me at least what I asked for. Extra stuff? I don’t care.”
// So this works perfectly.


//another example of adding more fields is no issue but less yes we have a problem

type user = {
    username: string,
    password: number
}

const u: user = {
    username: "Naetik Soni",
    password: 123
}


type Item = { name: string, Quantity: number }
type Address = { street: string, pin: number }

type order = {
    id: string,
    items: Item[],
    address: Address[]
} // this is called splitting out data types for example the above code its comes under a good practice and keeps the code maintainable and clearity of code.




