let str="bibek\"";
console.log(str);
console.log(str.length);
console.log(str.includes("bibz") );
console.log(str.startsWith("B"));
console.log(str.endsWith("\""));
console.log(str.endsWith(`"`));

let sentence="hello world!! how are you? ";
let word="hello";
console.log("Did he say hello? ",sentence.includes(word)? "yes": "No");
console.log(`Did he say ${word}? ${sentence.includes(word)? "yes" : "No"}`);


let help=" please give me Rs: 1000";
let amount=Number.parseInt(help.slice(" please give me Rs: ".length));
console.log(amount, typeof amount);


let friend="deeepeka";
// friend[3]="R";                        its not changed because string is immutable...
friend=friend.replace(friend[4],"R");
// check the inability of javascript by changing index 0 to  5 or 6.... so we say we cannot change the string but can make new one.
console.log(friend);