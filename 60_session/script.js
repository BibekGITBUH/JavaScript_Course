// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

// Storage event : Its active when ever the changes is seen in localstorage of any page for another page.
window.onstorage = (e) => {     // syntax for storage event when trigger while changes occures in windows localStorage
    alert("changed")
    console.log(e)
}
// not for session and cookies