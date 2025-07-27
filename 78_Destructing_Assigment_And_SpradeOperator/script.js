// Destructing in Array:
let arr = [3, 5, 8, 9, 12, 14]

// No need to do this:
// let a = arr[0]
// let b = arr[1]

// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

// let [a, , b, ...rest] = arr
// console.log(a, b, rest)

// Destructing in Objects:
let { a, b,...rest } = { a: 1, b: 5,c:6,d:7 }
console.log(a, b,rest)

// Spread Operator  : Convert array into Objects
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
  return v1 + v2 + v3
}
function sum1(v1, v2, v3) {
    return {v1 ,v2 ,v3}
  }
function sum2(v1, v2, v3) {
    return ({v1 ,v2 ,v3})
  }  
console.log(sum(...arr1))
console.log(sum1(...arr1))
console.log(sum2(...arr1))

let obj2 = {
  name: "Harry",
  company: "Company xyz",
  address: "XYZ"
}

// console.log({ ...obj2, name: "John", company: "ABC" })
console.log({ name: "John", company: "ABC", ...obj2 }) // This will print the obj2 object without changing any values

// For extra knowledge
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax