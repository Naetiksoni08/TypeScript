function makechai(type: string, cups: number) {
    console.log(`making ${cups} cups of ${type}`);
}
makechai("Masala", 2);


function getchaiprice(): number {
    return 25
} // data type of getchaiprice should come in number

function logchai(): void {
    console.log("chai is ready");
} // nothing to return cuz void

//optional parameter
function order(type?: string) { // this means that type is optional that aye na aye we dont know and dont care but if it comes then the type would be string
    console.log(type) // prints undefine
}
// What this means:
// type may come
// type may not come
// If it comes → it must be a string
// If it doesn’t come → it will be undefined
// internally ts treats it as type: string | undefined

order("Ginger")
order() // both is correct cuz string or undefined

//defualt parameter
function orderchai(type: string = "Masala") { // this means that type will be of string but in case someone didnt pass anything then the value of the type would be defualt type that is masala which we have passed 
    console.log(type) //here we dont have  the type as string|undefined we only have string here 
}
orderchai("Green")  // type = "Green"
orderchai()         // type = "Masala"




function CreateChai(order: {
    type: string,
    sugar: number,
    cupssize: "small" | "medium" | "large"
}): number {
    return 5;
} // this is a syntax its easy