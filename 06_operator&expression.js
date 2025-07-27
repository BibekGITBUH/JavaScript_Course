// operator and expression 
//Arithmatic operator 
let a=45;
let b=5;
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);  //here we get the value of exact, not int ie. all decimal.
console.log("a**b=", a**b);  // a to the power b 
console.log("a%b=", a%b); //modulo
console.log("aincr", a++,a,++a); //increment 
console.log("adecr", b--,b,--b);  // decrement

//Assignment operator
let x=5;
console.log(x +=3);  //x=x+3  its meaning
console.log(x -=1);  //x=x-1
console.log(x *=5);  //x=x*5
console.log(x /=2);  //x=x/2
console.log(x %=10); //x=x%10
console.log(x **=2); //x=x**2

//comparator operator

let z=7;
let y="7";
console.log("z==y is:", z==y); // here compare operator show the given statement is false or true.
console.log("z != y is:",z != y); // not equals to
console.log("z===y is:", z===y); // it compare the value with its datatype ie. equals to.
console.log("z!==y is:",z !== y);// it also compare the value with its datatype ie. not equals to.
console.log("z>y is:",z>y);
console.log("z<y is:", z<y);
console.log("z>=y is:",z>=y);
console.log("z<=y is:", z<=y);

//logical operator 
console.log(true&& true);  //and gate
console.log(false || true );// or gate
console.log(! false); //not gate
// more example:
// console.log(7<6 && 8>6);    ... etc


