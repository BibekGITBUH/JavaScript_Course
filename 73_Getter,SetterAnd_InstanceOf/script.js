class Animal {
    constructor(name) {
      this._name = name
    }
    fly() {
      console.log("Mai ud rha hu")
    }
    get xname() {
      return this._name +" "+ this._xname
    }
  
    set xname(newName) {
      this._xname = newName
    }
   

  }
  
  class Rabbit extends Animal {
    eatCarrot() {
      console.log("Eating carrot")
    }
  }
  
  let a = new Rabbit("Bruno")
  a.fly()
  console.log(a.xname)
  a.xname = "Jack"
  console.log(a.xname)

  let c = 56
  
  console.log(a instanceof Animal)   // this means a is an object of animal and may be obj of rabbit too : check for extends too 
  console.log(a instanceof Rabbit)
  console.log(c instanceof Animal)

  