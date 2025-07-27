// document.getElementById("google").addEventListener("click", function() { 
// //let url="https://www.google.com/search?q=javascript";
// //let win=window.open(url, "","width=500,height=500,scrollbars=yes,resizable=yes");
// window.location = "https://www.google.com";
// win.focus();
// })
// // line 2,3 or 4 options

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)



setInterval(async function() {
    document.querySelector("#bulb1").classList.toggle("bulb1")  // .bulb for index.html and #bulb for style.css
    //document.getElementById("bulb").classList.toggle("bulb")
  }, 300)