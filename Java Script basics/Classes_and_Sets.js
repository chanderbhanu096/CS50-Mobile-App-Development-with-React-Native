Date.now()   //Date is class and whole line a static method

const  d = new Date()  // d objecr

class set{
    constructor(arr) {   //instance of class is created which is constructor and 1 argument needed to call constructor of array type 
        this.arr = arr          // arg is stored in the instance of this constructor
    }

    add(val){
        if(!this.has(val)) this.arr.push(val)

    }

    delete(){
        this.arr = this.arr.filter(x => !==val)
    }

    has(val) {
        return this.arr.includes(val)
    }

    get size(arr) {
        return this.arr.length()
    }
}