const person = {
    name:"bhanu",
    greet:function() {console.log('hello, '+this.name)}
        
    }
person.greet()  // hello bhanu

const person2 = {
    name:"bholu",
}

person2.greet = person.greet

person2.greet() // hello bholu 

greet()        // hello undefined