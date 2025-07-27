let x = function(event0) {
  console.log(event0);
  console.log(event0.type, event0.clientX, event0.clientY)   // client x AND y ARE COORDINATES
  //alert("Hello World1!")
  document.getElementById("xyz").innerHTML=("edvdvdv wec"); 
  console.log(event0.target)
  console.log("1");
  }
  
  let y = function(e) {
    console.log(e)
    // alert("Hello World2!")
    document.getElementById("xyz").innerHTML=("wejfhvdvedvdvdv wec");  
    console.log("2");
  }

  btn1.addEventListener('click', x)
  document.write("wejdfgrgfh wec");
  btn1.addEventListener('click', y)
  
  
  
  let a = prompt("What is your favorite number?");
  
  
  if (a == "2") {
    btn1.removeEventListener('click', x)
  } 