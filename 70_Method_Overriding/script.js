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
   // this.name=name     // this wont work as super is not defined initially
      super(name)
       this.name=name;
      console.log(`Hello ${this.name} This is a newly written constructor`)
    }

    // If we create our own constructor then we cant use this.name before defining super(name)

    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)
    // }

    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
     // console.log(`EEmployee has requested ${leaves + 1} leaves (One extra)`) 
  
    }
  }
  

// 35 to 40 method will be called insted of 14 to 17 and method is over-rided in child class, So this is called methopd overriding
// If 38 is // and 36 and 37 enables then 14 to 17 is called followed by 35 to 40

  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)


// We must have super() in constructorat beginning if we are defining constructor by self or mannually, or child class will automatically 
            // contains super constructor by engine.
