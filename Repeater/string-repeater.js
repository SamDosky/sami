
var string = prompt("Write something");
var repeated = '';

for(var i = 0; i < 3; i++)
{
    repeated += string + '\n'; 
}

window.alert(repeated);