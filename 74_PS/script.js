class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.r = this.real + num.real
      this.i = this.imaginary + num.imaginary
    }
  
    get xreal() {
      return this.real
    }
  
    get ximaginary() {
      return this.imaginary
    }
  
    set ximaginary(newImaginary) {
      this.imaginary = newImaginary
    }
  
    set xreal(newReal) {
      this.real = newReal
    }
  }
  
  let a = new Complex(2, 4)
  console.log(a.real, a.imaginary)
  a.xreal = 10
  a.ximaginary = 10
  console.log(a.real, a.imaginary)
  let b = new Complex(6, 2)
  a.add(b)
  console.log(`${a.r}+${a.i}i`)
  


  
  // class Human {
  //   constructor(name, favfood) {
  //     this.name = name
  //     this.favfood = favfood
  //   }
  //   walk() {
  //     console.log(this.name + "Human is walking")
  //   }
  // }
  
  // class Student extends Human {
  //   walk() {
  //     console.log(this.name + ": Student is walking")
  //   }
  // }
  
  // let o = new Student("Harry", "Bhindi")
  // o.walk()
  
  // console.log(o instanceof Human)


  