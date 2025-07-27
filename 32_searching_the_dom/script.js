// Change the card title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))
let n=0;
function onclickAction(){
    if (n===0){
    n=n+1;
    let value="green";
    document.querySelectorAll(".this")[0].style.background=value;
    }
    else if(n===1){
        n=n-1;
        let value="red";
        document.querySelectorAll(".this")[0].style.background=value;    
    }
}

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    
}