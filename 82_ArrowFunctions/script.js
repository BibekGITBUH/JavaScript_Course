const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
  }
  
  const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this         // this is use beacause if inside setTimeout, the function is pure function(){} And in place of this that is used.
      console.log(this)
      setTimeout(()=>{
        console.log(this)
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
  }
  }
  sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  x.show()