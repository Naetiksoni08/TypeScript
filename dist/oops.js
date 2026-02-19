"use strict";
// class Chai {
//     Flavour: string
//     price: number
Object.defineProperty(exports, "__esModule", { value: true });
//     // constructor(Flavour:string,price:number) {
//     //     this.Flavour=Flavour;
//     //     this.price=price;
//     // }
//     constructor(Flavour: string) {
//         this.Flavour = Flavour;
//         console.log(this) //  This points to the object which was made, so for example in the below code, this will be pointing to Masala Chai.And all the properties of the chai can be accessed by Masala Chai.
//     }
// }
// const masalachai = new Chai("Ginger");
// masalachai.Flavour = "Masala"
// masalachai.price = 20
//access modifiers
// private
//public
//protected
class chai {
    flavour = "Masala chai"; // this can be accessed from anywhere even from diff class
    secretIngredients = "cardamom"; // this can be accessed only from this class not from outside or other files or classes
    reveal() {
        return this.secretIngredients; // this one is ok
    }
    shopname = "Naetik's Shop"; // this is like staff door
}
class shop {
    shopname = "Naetik's Shop";
}
class branch extends shop {
    getName() {
        return this.shopname; // this will work perfectly
    }
}
const s = new branch();
s.getName(); // perfect code
// private
class Walet {
    #balance = 200; // u can either write private balance or #balance both means private u will see this # thing a lot of place in other code bases so this is simply other way of writing private keyword
    getBalance() {
        return this.#balance;
    }
}
const w = new Walet();
w.getBalance(); //perfect code
//readonly property in classes and objects
class cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
// getter & setter  - controlled gates
class Modern {
    _sugar = 2; // this _ is also a conventional behaviour widely used 
    // we use getter And a setter when we can't directly access a data member. For example, in the above code we can not directly access `_sugar` because it's a private data member.
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("Too Sweet");
        this._sugar = value;
    }
}
const c = new Modern();
c.sugar = 3;
//static members
class w1 {
    Flavour;
    static shopName = "Chai code cafe";
    constructor(Flavour) {
        this.Flavour = Flavour;
    }
}
console.log(w1.shopName);
// If I wanna access this variable `shopName`, which is static in this case, we can only access this `shopName` using the class name because it is static and we cannot access it using object
//abstract class - abstract means showcasing only essential features while hiding complex, unnecessary background implementation details.
class Drink {
}
class MyClass extends Drink {
    make() {
        console.log("brewing chai");
    }
}
//composition concept
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
} // This code that we have written is like the alternative of inheritance. People also write code like this instead of inheriting a class or extending a class, so this also comes under a good practice in TypeScript.
//we cannot directly access secretIngredients that is
// const c = new chai();
// c.  we cannot directly access secretIngredients doing c. there is a reveal fucntion we can access it using that
// In large codebases:
// private → most common (easy & readable)
// #private → used when strict encapsulation needed
// _ → mostly legacy or style preference
// _
class User {
    _password = "12345";
}
const u = new User();
console.log(u._password); // ✔️ perfectly allowed
//_ does NOT make anything private. and It has zero technical meaning in JavaScript or TypeScript.
// “This variable is internal. Please don’t access or modify it directly.”
//it means “Staff only — but the door is not locked.”
// so When a developer sees:
// They understand:
// This is internal state
// Use getter/setter instead
// Changing this directly may break logic
//# sourceMappingURL=oops.js.map