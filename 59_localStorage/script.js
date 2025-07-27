let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {

        localStorage.removeItem(key)   
        
}

if (key == 0) {
        localStorage.clear()
        
}



// we can update : localStorage.setItem("ram","chaudhary");
   // if initally ram is key and value is gautam then now ram chaudhary will be set

// localStorage.setItem("key","pair");
// localStorage.getItem("key"); // provide the item with key given inside ""
// localStorage.deleteItem("key") ;   // delete selected key pair 
// localStorage.clear();   // clears all
// delete.localStorage.ram    // delete the key value pair with key is ram

// key and value both must be strings if u dont enter string prompt automatically make it string and always localStorage
// contains the string value only ..

// Why localStorage insted of cookie?
  //Ans: bcz we dont want to send cookies in every session or request in server, as localStorage dont so we use local
  // it servive for reload too


// Test function for loop to print each key in localStorage 
  function lop(){
    for (let i=0; i==localStorage.length; i++){
    console.log(localStorage.key(i));
    }}
lop()



JSON.stringify(obj1) // this convert the json object ie. opbj1  to string
JSON.parse(string1)  // this converts the string ie. string1 to object

