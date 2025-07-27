document.getElementById("submit").addEventListener("click", (evnt) => {       // " click " for button and "submit" for form
    evnt.preventDefault()          // preventDefault prevent form reloading page after submit
    let titlec = document.getElementById("title").value
    let descc = document.getElementById("desc").value
    let arrayObj=[titlec,descc]
    console.log(typeof arrayObj)
    localStorage.setItem("todo", JSON.stringify(arrayObj))
    console.log(evnt)
    document.getElementById("todo").innerHTML = `
    <h1>${titlec} </h1>
    <p> ${descc}</p>
    `
    //title.value = ""    // uses for removing typed text in input text field after submit
   // desc.value = ""
  })
  
  deleteBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })

  