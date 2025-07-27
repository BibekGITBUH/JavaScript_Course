let name1="Bibek";
let name2="Aayusha Karki";
let name3="Ghimire.."
console.log("1",name1.toUpperCase());
console.log("2",name1.toUpperCase());
console.log("3",name1.toLowerCase());
console.log("4",name1.slice(1,9));
console.log("5",name1.slice(2));     // index 2 and rest of others..
console.log("6",name1.slice(2,5));   // contains parameters and index 2 to 4 is shown in result. ( 0   1    2    3    4   )
                                                                       // ...              ...   ( B   i    b    e    k   )                                                                     
console.log("7",name2.replace("Karki", "Ghimire"));  // replace kakri with ghimire..
console.log("8",name2.replace("a","x"));
console.log("9",name2.replace("f","z"));
console.log("10",name1.concat(" last name is: ",name3));  // it can be used as : " last name is:"+name3   this is concat in name1  ...
let name4="     Ajit   ";
let name5="aaaaaaaaaaaaaaaaaaaajit";
console.log("11",name4.trim());
console.log("12",name5.trim());    // only works for whitespace....    
// for more methods : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods
