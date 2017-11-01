var input = window.prompt("enter the index")
var inputt = window.prompt("enter the new text")
if (input === "one" || input === "two" || input === "three" || input === "four" ){
    var para = document.getElementById(input)
     para.innerHTML = inputt
} else {
var para = document.getElementById("one")
para.innerHTML = inputt
 }
