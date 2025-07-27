// $n  where n= any 0 to ..
// they store the reference of any selected dom collection
// eg: first select any class elements called s1 and type $0 the selected element will be displayed. after that, select another class or any elemensts called s2
           // then type $0 last selected elements s2 will be displayed so conclusion: each select store each array index of $n in reverse order.
           // if 
// we can asssign the selected $ index to another $ index example: $1=$5 then $5 containted will replace to $1 content and $1 initial contained will be lost.            
// $0=childNodes  
// $0=nextSibling
// $0=previouseSibiling



console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)