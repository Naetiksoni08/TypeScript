// see we will study union and any now
// union basically means all like a universal set and intersection means common 
// so i cna write like this

let subs: number | string = 10; // this is valid becuase type is number
subs = "1 Million" // this is also valid because type is string
//so why it is called union because number+string both the type of values will work

//another example 
let apirequest : "Pending" | "Success" | "error" = "Pending"; // this means that api request can only have pending,success and error state and by defualt it will be pending
// apirequest = "done" // now i cant do this because it can only be pendingm,success,error 





