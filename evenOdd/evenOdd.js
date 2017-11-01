

var string = window.prompt("Write something");
if ( isNaN(string) ){
      window.alert(" the input is not a number")
}
else if (Number(string) % 2 === 0) {
    window.alert(string + " is even");
}else{
    window.alert(string + " is odd")
}