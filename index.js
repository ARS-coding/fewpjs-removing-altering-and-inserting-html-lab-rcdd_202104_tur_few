// Write your code here!

let main = document.body.querySelector("main#main");
main.remove();

document.createElement("h1");
document.body.appendChild("h1");
let h1 = document.body.querySelector("h1");
h1.setAttribute("id", "victory");
let newHeader = document.body.querySelector("h1#victory");