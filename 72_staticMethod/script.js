class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name) {  // in order to access the method inside the same class where method is build: 
                                 // Method must be static and called by className.methodName
       // alert(this.name.charAt(0).toUpperCase() + this.name.substr(1, this.name.length))
     return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
// console.log(j.capitalize("thisa"))//This doesnt work. As, the static methods build inside those class cannot be called outside from those class.
 