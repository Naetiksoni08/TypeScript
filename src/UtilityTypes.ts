//utility types (very interesting topic)

//partial utility
type chai = {
    name: string,
    price: number,
    isHot: boolean
}



const updatechai = (updates: Partial<chai>) => {
    console.log('Updating chai with', updates);
}

updatechai({ price: 25 })
updatechai({ isHot: false })
updatechai({}) // empty object is allowed..
// it simply means Make everything optional so internally it typescript converts the code into this 
// {
//     name?: string;
//     price?: number;
//     isHot?: boolean;
//   }



//required utility--it is the opposite of partial make every field required



type User = {
    name?: string;
    age?: number;
} // currently both the name and age is optional but 

type FullUser = Required<User> // now internally both name and age is required and not optional

const updateduser: FullUser = {
    name: "Naetik",
    age: 20 // if i comment age its show age is missing in type..
}




//readonly utility


type Chai = {
    name: string;
    price: number;
}

type ReadonlyChai = Readonly<Chai>

const chai: ReadonlyChai = {
    name: "Masala",
    price: 20
}

//   chai.price = 30 ❌ ERROR
// lets assign the values atleast one time You are allowed to assign value once at creation time
// You are NOT allowed to change it after that.


// pick -- utility type

// Pick<T, K> means:
// “From type T, pick only the properties listed in K.”
// T = brew
// K = "name" | "price"
//basically we can pick specific fields 
type brew = {
    name: string,
    price: number,
    isHot: boolean
}

type ChaiNamePrice = Pick<brew, "name" | "price">

const chai2: ChaiNamePrice = {
    name: "Masala",
    price: 20,
    // isHot:false // this is removed
}


//omit-utitlity
// we can remove specific fields
type ChaiWithoutHot = Omit<brew, "isHot">

const updatedbrew: ChaiWithoutHot = {
    name: "davidoff",
    price: 900,
    // isHot: false // brew had 3 properties name price and ishot right but when is said from the T remove k that is from T type brew remove K ishot thats it 
}


//so we have 5 types of utility types

// Partial
// Required
// Readonly
// Pick
// Omit

// we have others too but these you must know thats it..

