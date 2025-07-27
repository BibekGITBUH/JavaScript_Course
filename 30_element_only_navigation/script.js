const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red"
  }
  // type changeBgRed in console
  let b = document.body
  console.log("First child of b is: ", b.firstChild)
  console.log("First Element child of b is: ", b.firstElementChild)  // so always use Element

  // select <ul> and type $0.children 
     // this will show collection of <lil>