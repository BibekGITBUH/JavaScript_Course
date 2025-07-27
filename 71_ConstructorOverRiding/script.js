class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      this.name=name;
      console.log(`hello ${this.name} This is a newly written constructor`)      // as the constructor is again added by 
                           //so its constructor overriding  But child uses super so parent and child constructor is seen one by one.
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically and passes the arguments of parent consructor
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)


