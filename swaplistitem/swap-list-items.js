var input1 = window.prompt("enter the first index")
var input2 = window.prompt("enter the second index")
var text1 = document.getElementById(input1)
var text2 = document.getElementById(input2)
var sami = text2.innerHTML 
text2.innerHTML = text1.innerHTML
text1.innerHTML = sami
