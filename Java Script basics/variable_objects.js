// Variables
const numbervariable = 10
const stringvariable = "bhanu"
const booleanvariable = true
const nullvariable = null


console.log(numbervariable)
console.log(stringvariable)
console.log(booleanvariable)
console.log("10") //how to print nimber as a string

// type casting 
console.log(numbervariable+"") // O/P = String //Implicit Casting-depending on the compiler behaviour converting from number to string 
//    OR
const explicit = String(x)  // o/p = String // explicit casting 

// method for checking the data type of
 console.log(typeof(numbervariable))  //O/P number

 typeof(null)  // equals to null

 /* Falsy Values 
    0
    null
    Nan
    undefined
    false

    Truthy Values
    {}
    []
    every other values is truthy