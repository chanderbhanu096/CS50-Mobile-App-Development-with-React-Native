// First Method To creat an Object

const o = new Object();
o.firstname = "Chander"
o.lastname ="Bhanu"
// or 
//o['lastname'] = "Bhanu"
const key  = "hellokey"
o.number = 123
o.greet = function() {
    console.log("hi")
}


// Second Method or new syntax
// const objectname = {}   this is SYNTAX for creating a new object
const obj = {
    firstname: "chander",
    middlename: "bhanu",
    lastname: "rana",
    objinsideob:{
        greet:"hi",
    },
}

// how to access different from obj
obj.firstname //Chander
obj.middlename //bhanu
obj.lastname  //rana
obj.objinsideob // {greet: "hi"}
obj.objinsideob.greet // "hi"

////////////////////////////////
 const o1 = {
     a:'a',
     b='b',
 }
 const  c = o1  //assigning / copying o1 values to  c
 o1.a= "new val"

 //alternate for copying vallues 
 const c = Object.assign({},0)
 console.log("c.a")  // o/p  new value because they are both referencing to same memory location
 //if o1 is upldated hten that means c will be updated too because of the memory reference.

  // For deep copying Means can cpoy object
  //deep copy
  function deepCopy(obj) {
      return obj.assign({}.obj)
  }