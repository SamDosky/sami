var string = prompt("Write something");
var number = prompt("Write a number");

var repeated = "";

for (var i = 0 ; i < (Number(number)) ; i++){
    repeated += string + '\n'; 
}
window.alert(repeated);